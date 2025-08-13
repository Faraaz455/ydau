# YDAU - Yokogawa Data Acquisition Utility

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Electron](https://img.shields.io/badge/Electron-37.2.6-47848f.svg)](https://electronjs.org/)
[![Angular](https://img.shields.io/badge/Angular-19.2-dd0031.svg)](https://angular.io/)
[![NestJS](https://img.shields.io/badge/NestJS-11.1-e0234e.svg)](https://nestjs.com/)

A complete enterprise data acquisition utility for Yokogawa systems, featuring a modern Angular frontend, robust NestJS backend, and cross-platform Electron desktop application.

![YDAU Logo](assets/icon.png)

## 🚀 Features

- **Real-time Data Acquisition**: Continuous emission monitoring and data collection
- **Cross-Platform Desktop App**: Built with Electron for Windows, macOS, and Linux
- **Modern Web Interface**: Responsive Angular frontend with Material Design
- **Robust Backend**: NestJS-powered API with TypeScript
- **Excel Export**: Built-in data export functionality with ExcelJS
- **Professional Installer**: Windows NSIS installer with proper branding
- **System Integration**: System tray support and desktop shortcuts
- **Comprehensive Logging**: Winston-based logging system

## 🏗️ Architecture

```
YDAU/
├── ydau-frontend/          # Angular 19 Web Application
├── ydau-backend/           # NestJS API Server
├── ydau-electron/          # Electron Desktop Wrapper
├── src/                    # Main Application Logic
├── assets/                 # Branding & Icons
└── installation/           # Setup Scripts & Installers
```

### Technology Stack

- **Frontend**: Angular 19.2 + Angular Material + CDK
- **Backend**: NestJS 11.1 + Express + Winston Logging
- **Desktop**: Electron 37.2 + TypeScript
- **Data Export**: ExcelJS for spreadsheet generation
- **Build Tools**: TypeScript 5.7 + Angular CLI + Nest CLI
- **Testing**: Jest + Jasmine + Karma

## 📦 Installation

### For End Users

1. **Quick Setup** (Recommended):
   ```bash
   # Run the automated installer
   SETUP_FOR_USER.bat
   ```

2. **Manual Installation**:
   ```bash
   # Install the application
   INSTALL_YDAU.vbs
   
   # Start YDAU
   START_YDAU.bat
   ```

### For Developers

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Faraaz455/ydau.git
   cd ydau
   ```

2. **Install dependencies**:
   ```bash
   # Main application
   npm install
   
   # Frontend
   cd ydau-frontend && npm install && cd ..
   
   # Backend
   cd ydau-backend && npm install && cd ..
   
   # Electron wrapper
   cd ydau-electron && npm install && cd ..
   ```

3. **Development setup**:
   ```bash
   # Start backend server
   cd ydau-backend && npm run start:dev
   
   # Start frontend (in new terminal)
   cd ydau-frontend && npm start
   
   # Start electron app (in new terminal)
   npm run electron-dev
   ```

## 🛠️ Development

### Available Scripts

#### Main Application
```bash
npm run build          # Compile TypeScript
npm run electron       # Run Electron app
npm run electron-dev   # Run in development mode
npm run pack           # Package without installer
npm run dist           # Build installer
npm run dist-win       # Build Windows installer
npm run clean          # Clean build artifacts
```

#### Frontend (Angular)
```bash
cd ydau-frontend
npm start              # Development server (ng serve)
npm run build          # Production build (ng build)
npm test               # Run unit tests (ng test)
npm run watch          # Build with file watching
```

#### Backend (NestJS)
```bash
cd ydau-backend
npm run start:dev      # Development server with hot reload
npm run start:prod     # Production server
npm run build          # Build for production
npm run test           # Run unit tests
npm run test:e2e       # Run end-to-end tests
npm run lint           # ESLint code analysis
```

### Project Structure

```
YDAU/
├── assets/
│   ├── icon.ico              # Windows application icon
│   ├── icon.png              # Documentation logo
│   └── icon.svg              # Vector source
├── src/
│   ├── electron-main.ts      # Electron main process
│   ├── generate-icon.ts      # Icon generation utilities
│   └── index.ts              # Application entry point
├── ydau-frontend/
│   ├── src/app/              # Angular components
│   ├── src/styles.scss       # Global styles
│   └── angular.json          # Angular configuration
├── ydau-backend/
│   ├── src/
│   │   ├── config/           # Configuration module
│   │   ├── logs/             # Logging module
│   │   ├── readings/         # Data acquisition module
│   │   └── main.ts           # NestJS bootstrap
│   └── test/                 # E2E tests
├── ydau-electron/
│   ├── main.js               # Electron wrapper
│   └── package.json          # Electron dependencies
├── public/
│   └── index.html            # Web application entry
├── installation/
│   ├── SETUP_FOR_USER.bat    # Automated installer
│   ├── INSTALL_YDAU.vbs      # VBScript installer
│   ├── START_YDAU.bat        # Application launcher
│   └── UNINSTALL_YDAU.vbs    # Uninstaller script
└── documentation/
    ├── INSTALLATION_GUIDE.md  # Setup instructions
    └── BRANDING_SUMMARY.md    # Icon usage guide
```

## 🔧 Configuration

### Backend Configuration
The NestJS backend includes modules for:
- **Config Module**: Application configuration management
- **Readings Module**: Data acquisition and processing
- **Logs Module**: System logging and monitoring

### Frontend Configuration
Angular application with:
- **Material Design**: UI component library
- **Responsive Layout**: Mobile-friendly interface
- **TypeScript**: Type-safe development

### Electron Configuration
Desktop application features:
- **System Tray**: Background operation support
- **Auto-updater**: Built-in update mechanism
- **Cross-platform**: Windows, macOS, Linux support

## 📋 API Documentation

### Backend Endpoints

The NestJS backend provides RESTful APIs for:

- `GET /api/readings` - Retrieve data readings
- `POST /api/readings` - Submit new readings
- `GET /api/config` - Get system configuration
- `PUT /api/config` - Update configuration
- `GET /api/logs` - Access system logs

## 🧪 Testing

### Run Tests
```bash
# Frontend tests
cd ydau-frontend && npm test

# Backend tests
cd ydau-backend && npm run test

# E2E tests
cd ydau-backend && npm run test:e2e

# Test coverage
cd ydau-backend && npm run test:cov
```

## 📦 Building & Deployment

### Development Build
```bash
# Build all components
npm run build

# Build frontend
cd ydau-frontend && npm run build

# Build backend
cd ydau-backend && npm run build
```

### Production Release
```bash
# Create Windows installer
npm run dist-win

# Create cross-platform packages
npm run dist

# Build executable
powershell -ExecutionPolicy Bypass -File CREATE_EXE.ps1
```

### Installation Package
The built installer includes:
- ✅ Desktop shortcuts
- ✅ Start Menu entries  
- ✅ System tray integration
- ✅ Automatic uninstaller
- ✅ Professional branding

## 🎨 Branding

YDAU features consistent branding across all components:
- **Colors**: Purple gradient (#667eea to #764ba2)
- **Logo**: Professional "YDAU" text on rounded background
- **Icon**: Available in ICO, PNG, and SVG formats

See [BRANDING_SUMMARY.md](BRANDING_SUMMARY.md) for detailed branding guidelines.

## 📝 Documentation

- [Installation Guide](INSTALLATION_GUIDE.md) - End-user setup instructions
- [Branding Summary](BRANDING_SUMMARY.md) - Icon and branding usage
- [User Manual](README_FOR_USER.txt) - End-user documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Angular style guide for frontend code
- Follow NestJS conventions for backend code
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🏢 Enterprise Usage

YDAU is designed for enterprise environments with:
- **Yokogawa Integration**: Seamless data acquisition from Yokogawa systems
- **CEMS Compliance**: Continuous Emission Monitoring System support
- **Industrial Standards**: Built for 24/7 operation
- **Data Export**: Excel integration for reporting
- **Professional Support**: Enterprise-grade logging and monitoring

## 📞 Support

For technical support and inquiries:
- Create an issue in this repository
- Check existing documentation
- Review installation guides

## 🚀 Quick Start

```bash
# 1. Clone and setup
git clone https://github.com/Faraaz455/ydau.git
cd ydau

# 2. Install dependencies
npm install

# 3. Build application
npm run build

# 4. Run in development
npm run electron-dev
```

---

**YDAU v1.0.0** - Yokogawa Data Acquisition Utility  
Built with ❤️ for industrial data acquisition and monitoring.