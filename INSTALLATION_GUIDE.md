# YDAU - Installation & User Guide

![YDAU Logo](assets/icon.ico)

## 📋 Table of Contents
- [System Requirements](#system-requirements)
- [Installation Instructions](#installation-instructions)
- [First Time Setup](#first-time-setup)
- [How to Use YDAU](#how-to-use-ydau)
- [Troubleshooting](#troubleshooting)
- [Uninstallation](#uninstallation)
- [Support](#support)

---

## 💻 System Requirements

### Minimum Requirements:
- **Operating System:** Windows 10 or later (64-bit recommended)
- **RAM:** 4 GB minimum
- **Storage:** 500 MB free disk space
- **Display:** 1280x720 resolution or higher
- **Internet:** Required for initial setup only

### Recommended Requirements:
- **Operating System:** Windows 11
- **RAM:** 8 GB or more
- **Storage:** 1 GB free disk space
- **Display:** 1920x1080 resolution

---

## 📦 Installation Instructions

### Method 1: Quick Installation (Recommended)

1. **Extract the YDAU folder** to your desired location (e.g., `C:\Program Files\YDAU`)

2. **Double-click** `SETUP_FOR_USER.bat`
   
3. **Follow the on-screen prompts**:
   - Press any key to continue when prompted
   - Wait for the installation to complete (2-3 minutes)
   
4. **Installation Complete!** 
   - You'll see a success message
   - YDAU will automatically start

### Method 2: Manual Installation

1. **Extract the YDAU folder** to your desired location

2. **Run the installer script**:
   - Right-click on `INSTALL_YDAU.vbs`
   - Select "Run"
   - Click "OK" on the success message

3. **Create the executable**:
   - Right-click on `CREATE_EXE.ps1`
   - Select "Run with PowerShell"
   - If prompted about execution policy, type `Y` and press Enter

---

## 🚀 First Time Setup

### Step 1: Launch YDAU
After installation, you can launch YDAU in several ways:

#### Option A: Desktop Shortcut
- Double-click the **YDAU** icon on your desktop

#### Option B: Windows Search
1. Press the **Windows key**
2. Type **"YDAU"**
3. Press **Enter**

#### Option C: Start Menu
1. Click **Start**
2. Navigate to **Programs → YDAU**
3. Click **YDAU**

### Step 2: Initial Configuration
On first launch:
1. The YDAU window will appear
2. System status will show "Ready"
3. Click **"Start Operation"** to begin data acquisition

---

## 📱 How to Use YDAU

### Main Interface

The YDAU interface consists of:

| Component | Description |
|-----------|-------------|
| **Status Indicator** | Shows if the system is active (green) or idle (orange) |
| **Version Info** | Displays current software version |
| **Database Status** | Shows connection status |
| **Last Sync** | Shows when data was last synchronized |
| **Start Operation** | Begins data acquisition process |
| **Settings** | Opens configuration options |

### Basic Operations

#### Starting Data Acquisition:
1. Click **"Start Operation"**
2. The status indicator will turn green
3. The application will minimize to system tray
4. Data acquisition runs in the background

#### Accessing from System Tray:
1. Look for the YDAU icon near the clock (bottom-right)
2. **Right-click** for options:
   - Show App - Opens the main window
   - Quit - Exits the application
3. **Single-click** to quickly show/hide the window

#### Stopping Operations:
1. Right-click the system tray icon
2. Select **"Quit"**
3. Confirm when prompted

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt + F4` | Close window (app continues in background) |
| `Windows + Search "YDAU"` | Quick launch |
| `Ctrl + Q` | Quit application completely |

---

## 🔧 Troubleshooting

### Common Issues & Solutions

#### Issue: "YDAU won't start"
**Solution:**
1. Right-click `START_YDAU.bat`
2. Select **"Run as Administrator"**
3. If still not working, reinstall using `SETUP_FOR_USER.bat`

#### Issue: "Can't find YDAU in Windows Search"
**Solution:**
1. Run `SETUP_FOR_USER.bat` again
2. Wait for Windows Search to index (may take 5-10 minutes)
3. Restart Windows Explorer:
   - Press `Ctrl + Shift + Esc`
   - Find "Windows Explorer"
   - Click "Restart"

#### Issue: "Application crashes on startup"
**Solution:**
1. Delete the `dist` folder
2. Run `BUILD_INSTALLER.bat`
3. Try launching again

#### Issue: "System tray icon missing"
**Solution:**
1. Click the arrow near the system clock
2. Find YDAU icon in the overflow area
3. Drag it to the main tray area

### Error Messages

| Error | Meaning | Solution |
|-------|---------|----------|
| "Cannot find START_YDAU.bat" | Installation incomplete | Run `SETUP_FOR_USER.bat` |
| "Node modules missing" | Dependencies not installed | Run `npm install` in command prompt |
| "Port already in use" | Another instance running | Check system tray and close existing instance |

---

## 🗑️ Uninstallation

### Complete Removal:

1. **Close YDAU** if running:
   - Right-click system tray icon
   - Select "Quit"

2. **Run the uninstaller**:
   - Navigate to YDAU folder
   - Double-click `UNINSTALL_YDAU.vbs`
   - Click "Yes" to confirm

3. **Delete the folder**:
   - Delete the entire YDAU folder
   - Empty Recycle Bin

### Removing Shortcuts Only:
- Run `UNINSTALL_YDAU.vbs` without deleting the folder

---

## 📞 Support

### Contact Information

**Technical Support:**
- Email: support@yokogawa.com
- Phone: 1-800-YOKOGAWA (1-800-965-6429)
- Hours: Monday-Friday, 9 AM - 5 PM EST

**Online Resources:**
- Website: www.yokogawa.com/support
- Documentation: www.yokogawa.com/ydau/docs
- FAQ: www.yokogawa.com/ydau/faq

### Before Contacting Support:

Please have the following information ready:
1. YDAU version number (shown in the application)
2. Windows version
3. Error messages (if any)
4. Steps that led to the issue

### Remote Support:
If needed, our support team can provide remote assistance using TeamViewer or similar tools.

---

## 📄 License

Copyright © 2024 Yokogawa Electric Corporation. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 🔄 Updates

### Checking for Updates:
1. Open YDAU
2. Click **Settings**
3. Select **Check for Updates**

### Automatic Updates:
YDAU will automatically check for updates on startup if internet is available.

---

## 📝 Additional Notes

### Best Practices:
- Keep YDAU running in the background for continuous data acquisition
- Regularly check the "Last Sync" time to ensure data is current
- Don't run multiple instances of YDAU simultaneously
- Ensure your system time is accurate for proper data timestamping

### Performance Tips:
- Close unnecessary applications while YDAU is running
- Ensure at least 1 GB of free RAM is available
- Disable Windows sleep mode for uninterrupted operation
- Add YDAU to Windows Defender exclusions for better performance

---

## ✅ Quick Reference Card

### Installation:
```
1. Extract folder
2. Run SETUP_FOR_USER.bat
3. Done!
```

### Daily Use:
```
1. Search "YDAU" in Windows
2. Click "Start Operation"
3. Minimize to tray
```

### Troubleshooting:
```
1. Run as Administrator
2. Reinstall if needed
3. Contact support
```

---

*Document Version: 1.0.0*  
*Last Updated: 2024*  
*© Yokogawa Electric Corporation*