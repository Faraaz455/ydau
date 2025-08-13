const { app, BrowserWindow, Menu, Tray, nativeImage } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;
let tray;
let ydauBackendProcess;

function createYdauWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    title: 'Yokogawa Data Acquisition Utility (YDAU)',
    icon: path.join(__dirname, 'assets', 'ydau-icon.ico'), // Add YDAU icon
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false // For development
    }
  });

  // Load YDAU Angular frontend
  mainWindow.loadURL('http://localhost:4200');

  // Create system tray for YDAU
  createYdauTray();

  mainWindow.on('minimize', function (event) {
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on('close', function (event) {
    if (!app.isQuiting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });
}

function createYdauTray() {
  const trayIcon = nativeImage.createFromPath(path.join(__dirname, 'assets', 'ydau-tray.png'));
  tray = new Tray(trayIcon);
  
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show YDAU Dashboard',
      click: () => {
        mainWindow.show();
      }
    },
    {
      label: 'YDAU Status',
      submenu: [
        { label: 'Backend: Running', enabled: false },
        { label: 'Frontend: Connected', enabled: false },
        { label: 'CEMS API: Online', enabled: false }
      ]
    },
    { type: 'separator' },
    {
      label: 'Quit YDAU',
      click: () => {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);
  
  tray.setContextMenu(contextMenu);
  tray.setToolTip('Yokogawa Data Acquisition Utility (YDAU)');
  
  tray.on('double-click', () => {
    mainWindow.show();
  });
}

function startYdauBackend() {
  console.log('Starting YDAU Backend Service...');
  
  ydauBackendProcess = spawn('npm', ['run', 'start:dev'], {
    cwd: path.join(__dirname, '..', 'ydau-backend'),
    stdio: 'pipe'
  });

  ydauBackendProcess.stdout.on('data', (data) => {
    console.log(`YDAU Backend: ${data}`);
  });

  ydauBackendProcess.stderr.on('data', (data) => {
    console.error(`YDAU Backend Error: ${data}`);
  });
}

app.whenReady().then(() => {
  // Start YDAU backend service
  startYdauBackend();
  
  // Wait for backend to initialize, then create YDAU window
  setTimeout(() => {
    createYdauWindow();
  }, 4000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createYdauWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // Keep YDAU running in background (system tray)
  // Don't quit unless explicitly requested
});

app.on('before-quit', () => {
  app.isQuiting = true;
  
  // Terminate YDAU backend process
  if (ydauBackendProcess) {
    console.log('Shutting down YDAU Backend Service...');
    ydauBackendProcess.kill();
  }
});

// Remove default menu bar for YDAU
Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: 'YDAU',
    submenu: [
      { label: 'About YDAU', role: 'about' },
      { type: 'separator' },
      { label: 'Quit YDAU', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() }
    ]
  },
  {
    label: 'View',
    submenu: [
      { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: () => mainWindow.reload() },
      { label: 'Toggle Developer Tools', accelerator: 'F12', click: () => mainWindow.webContents.toggleDevTools() }
    ]
  }
]));