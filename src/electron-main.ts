import { app, BrowserWindow, Menu, Tray } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;

function createWindow() {
  // Get the app's root directory (where package.json is)
  // __dirname points to dist folder, so go up one level to get to project root
  const appPath = path.dirname(__dirname);
  const iconPath = path.join(appPath, 'assets', 'icon.ico');
  
  
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: iconPath,
    title: 'YDAU - Yokogawa Data Acquisition Utility',
    autoHideMenuBar: true
  });

  const htmlPath = path.join(appPath, 'public', 'index.html');
  mainWindow.loadFile(htmlPath);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('minimize' as any, (event: any) => {
    event.preventDefault();
    mainWindow?.hide();
  });
}

function createTray() {
  // Use the same app path resolution for consistency
  const appPath = path.dirname(__dirname);
  // Use PNG for system tray (works better than ICO)
  const iconPath = path.join(appPath, 'assets', 'icon.png');
  tray = new Tray(iconPath);
  
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        mainWindow?.show();
      }
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      }
    }
  ]);

  tray.setToolTip('YDAU - Yokogawa Data Acquisition');
  tray.setContextMenu(contextMenu);
  
  tray.on('click', () => {
    mainWindow?.show();
  });
}

app.whenReady().then(() => {
  createWindow();
  createTray();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  tray?.destroy();
});