import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ydau-root',
  imports: [HttpClientModule , CommonModule ],
  template: `
    <div class="ydau-container">
      <header class="ydau-header">
        <h1>Yokogawa Data Acquisition Utility (YDAU)</h1>
        <div class="status-indicator" [class]="apiStatus.toLowerCase()">
          {{ apiStatus }}
        </div>
      </header>

      <main class="ydau-main">
        <div class="dashboard-grid">
          <!-- Stats Cards -->
          <div class="stat-card">
            <h3>Pending Readings</h3>
            <div class="stat-value">{{ stats.pending_count }}</div>
          </div>

          <div class="stat-card">
            <h3>Successfully Sent</h3>
            <div class="stat-value">{{ stats.sent_count }}</div>
          </div>

          <div class="stat-card">
            <h3>Failed Uploads</h3>
            <div class="stat-value">{{ stats.failed_count }}</div>
          </div>

          <div class="stat-card">
            <h3>Last Sync</h3>
            <div class="stat-value">{{ formatDate(stats.last_sync) }}</div>
          </div>
        </div>

        <!-- Pending Readings -->
        <div class="data-section">
          <h2>Recent Readings Queue</h2>
          <table class="ydau-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Unit ID</th>
                <th>Stack ID</th>
                <th>SO2</th>
                <th>NOx</th>
                <th>CO2</th>
                <th>Status</th>
                <th>Retries</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let reading of pendingReadings">
                <td>{{ formatDate(reading.timestamp) }}</td>
                <td>{{ reading.unit_id }}</td>
                <td>{{ reading.stack_id }}</td>
                <td>{{ reading.so2 }}</td>
                <td>{{ reading.nox }}</td>
                <td>{{ reading.co2 }}</td>
                <td class="status" [class]="reading.status.toLowerCase()">{{ reading.status }}</td>
                <td>{{ reading.retry_count }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Recent Logs -->
        <div class="data-section">
          <h2>System Logs</h2>
          <div class="logs-container">
            <div *ngFor="let log of recentLogs" class="log-entry" [class]="log.type.toLowerCase()">
              <span class="log-time">{{ formatDate(log.timestamp) }}</span>
              <span class="log-type">{{ log.type }}</span>
              <span class="log-message">{{ log.message }}</span>
            </div>
          </div>
        </div>

        <div class="actions">
          <button (click)="refreshData()" class="ydau-button primary">Refresh Data</button>
          <button (click)="forceSyncNow()" class="ydau-button secondary">Force Sync Now</button>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .ydau-container {
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .ydau-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #007acc;
      padding-bottom: 15px;
      margin-bottom: 30px;
    }

    .status-indicator {
      padding: 8px 16px;
      border-radius: 4px;
      font-weight: bold;
    }

    .status-indicator.connected { background-color: #4caf50; color: white; }
    .status-indicator.disconnected { background-color: #f44336; color: white; }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
    }

    .stat-value {
      font-size: 2em;
      font-weight: bold;
      color: #007acc;
      margin-top: 10px;
    }

    .data-section {
      margin-bottom: 30px;
    }

    .ydau-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    .ydau-table th, .ydau-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    .ydau-table th {
      background-color: #007acc;
      color: white;
    }

    .status.pending { color: #ff9800; font-weight: bold; }
    .status.sent { color: #4caf50; font-weight: bold; }
    .status.failed { color: #f44336; font-weight: bold; }

    .logs-container {
      max-height: 300px;
      overflow-y: auto;
      border: 1px solid #ddd;
      padding: 15px;
      background-color: #f9f9f9;
    }

    .log-entry {
      margin-bottom: 10px;
      padding: 5px;
      border-left: 4px solid #ccc;
      padding-left: 10px;
    }

    .log-entry.info { border-left-color: #2196f3; }
    .log-entry.success { border-left-color: #4caf50; }
    .log-entry.error { border-left-color: #f44336; }

    .actions {
      display: flex;
      gap: 15px;
      margin-top: 30px;
    }

    .ydau-button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    .ydau-button.primary {
      background-color: #007acc;
      color: white;
    }

    .ydau-button.secondary {
      background-color: #6c757d;
      color: white;
    }
  `]
})
export class AppComponent implements OnInit {
  stats = {
    pending_count: 0,
    sent_count: 0,
    failed_count: 0,
    last_sync: new Date(),
    api_status: 'CONNECTED'
  };

  pendingReadings: any[] = [];
  recentLogs: any[] = [];
  apiStatus = 'CONNECTED';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshData();

    // Auto-refresh every 30 seconds
    setInterval(() => {
      this.refreshData();
    }, 30000);
  }

  refreshData() {
    // Get YDAU stats
    this.http.get<any>('http://localhost:3001/api/readings/stats')
      .subscribe(response => {
        this.stats = response;
        this.apiStatus = response.api_status;
      });

    // Get pending readings
    this.http.get<any>('http://localhost:3001/api/readings/pending')
      .subscribe(response => {
        this.pendingReadings = response.data;
      });

    // Get recent logs
    this.http.get<any>('http://localhost:3001/api/logs')
      .subscribe(response => {
        this.recentLogs = response.logs.slice(0, 10); // Show latest 10
      });
  }

  forceSyncNow() {
    console.log('YDAU: Force sync triggered');
    // In real app, this would trigger immediate sync
    this.refreshData();
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleString();
  }
}
