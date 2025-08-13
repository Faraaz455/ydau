@echo off
title YDAU - Starting Application
echo Starting YDAU Application...
echo Please wait...

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install --production --silent
)

REM Build if dist folder doesn't exist
if not exist "dist" (
    echo Building application...
    npm run build
)

REM Start the Electron app
npm run electron

pause