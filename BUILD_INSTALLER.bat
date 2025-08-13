@echo off
title Building YDAU Installer
echo ========================================
echo BUILDING YDAU WINDOWS INSTALLER
echo ========================================
echo.

REM Build TypeScript
echo Step 1: Building application...
call npm run build

echo.
echo Step 2: Creating Windows installer...
echo This will create an installer in the 'out' folder
call npm run dist-win

echo.
echo ========================================
echo BUILD COMPLETE!
echo ========================================
echo.
echo The installer has been created in: %CD%\out
echo.
echo Look for: YDAU Setup *.exe
echo.
pause