# YDAU Branding & Icon Usage Summary

## 🎨 Icon Files Location
All branding assets are located in: `assets\icon.ico`

## 📋 Files Updated for Consistent Branding

### 1. **Application Window Icon**
- **File:** `src\electron-main.ts`
- **Usage:** Main application window icon
- **Code:** `icon: path.join(__dirname, '../assets/icon.ico')`

### 2. **System Tray Icon**
- **File:** `src\electron-main.ts`
- **Usage:** System tray notification area
- **Code:** `const iconPath = path.join(__dirname, '../assets/icon.ico')`

### 3. **HTML Favicon**
- **File:** `public\index.html`
- **Usage:** Browser tab icon when viewing HTML
- **Code:** `<link rel="icon" type="image/x-icon" href="../assets/icon.ico">`

### 4. **Desktop Shortcuts**
- **File:** `INSTALL_YDAU.vbs`
- **Usage:** Desktop and Start Menu shortcuts
- **Code:** `strIconPath = strAppPath & "\assets\icon.ico"`

### 5. **Windows Installer Package**
- **File:** `package.json` (electron-builder configuration)
- **Usage:** 
  - Windows executable icon
  - Installer icon
  - Uninstaller icon
- **Code:** 
  ```json
  "win": {
    "icon": "assets/icon.ico"
  },
  "nsis": {
    "installerIcon": "assets/icon.ico",
    "uninstallerIcon": "assets/icon.ico"
  }
  ```

### 6. **Documentation**
- **File:** `INSTALLATION_GUIDE.md`
- **Usage:** Logo in documentation
- **Code:** `![YDAU Logo](assets/icon.ico)`

### 7. **Executable Wrapper**
- **File:** `YDAU.exe` (generated)
- **Usage:** Main executable icon (inherits from assets)

## 🔧 Icon File Formats Available

| Format | File | Usage |
|--------|------|-------|
| **ICO** | `assets/icon.ico` | Windows executables, shortcuts, system tray |
| **PNG** | `assets/icon.png` | Web displays, documentation |
| **SVG** | `assets/icon.svg` | Vector source for scaling |

## 🎯 Branding Consistency Points

### Visual Identity:
- **Colors:** Purple gradient (#667eea to #764ba2)
- **Text:** "YDAU" in white, bold font
- **Shape:** Rounded rectangle background
- **Style:** Modern, professional appearance

### Where Users Will See the Icon:
1. **Desktop Shortcut** - When installed via `SETUP_FOR_USER.bat`
2. **Start Menu** - Under Programs > YDAU
3. **Taskbar** - When application is running
4. **System Tray** - Bottom-right corner near clock
5. **Windows Search** - When searching for "YDAU"
6. **Application Window** - Top-left corner of window
7. **Windows Explorer** - File icon for YDAU.exe
8. **Installer** - During installation process

## 📁 File Structure Summary

```
YDAU/
├── assets/
│   ├── icon.ico        ← Main Windows icon (32x32, 16x16)
│   ├── icon.png        ← PNG version for web/docs
│   └── icon.svg        ← Vector source
├── src/
│   └── electron-main.ts ← Uses icon.ico for window & tray
├── public/
│   └── index.html       ← References icon.ico as favicon
├── INSTALL_YDAU.vbs     ← Uses icon.ico for shortcuts
├── package.json         ← Uses icon.ico for builds
└── INSTALLATION_GUIDE.md ← Shows icon.ico as logo
```

## ✅ Verification Checklist

- [x] Main window shows YDAU icon
- [x] System tray shows YDAU icon
- [x] Desktop shortcut has YDAU icon
- [x] Start Menu entry has YDAU icon
- [x] YDAU.exe file has YDAU icon
- [x] Installer uses YDAU icon
- [x] Documentation displays YDAU logo
- [x] HTML page has YDAU favicon

## 🔄 To Update Branding in Future:

1. Replace `assets/icon.ico` with new icon file
2. Rebuild application: `npm run build`
3. Regenerate executable: `powershell -ExecutionPolicy Bypass -File CREATE_EXE.ps1`
4. Run installer: `SETUP_FOR_USER.bat`

All branding will automatically update across the entire application!

---

*Last Updated: 2024*  
*YDAU Version: 1.0.0*