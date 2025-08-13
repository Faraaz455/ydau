@echo off
title YDAU - One-Click Setup
color 0A
cls

echo ==========================================
echo    YDAU - ONE-CLICK SETUP FOR WINDOWS
echo ==========================================
echo.
echo This will install YDAU on your computer:
echo - Create Desktop shortcut
echo - Add to Start Menu
echo - Make searchable in Windows
echo - Create an executable file
echo.
echo ==========================================
echo.
pause

echo.
echo [1/4] Installing shortcuts...
cscript //nologo INSTALL_YDAU.vbs

echo.
echo [2/4] Creating executable...
powershell -ExecutionPolicy Bypass -File CREATE_EXE.ps1

echo.
echo [3/4] Registering application...
REG ADD "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\App Paths\YDAU.exe" /ve /d "%CD%\YDAU.exe" /f >nul 2>&1
REG ADD "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\App Paths\YDAU.exe" /v "Path" /d "%CD%" /f >nul 2>&1

echo.
echo [4/4] Building application...
if not exist "dist" (
    call npm run build >nul 2>&1
)

cls
echo ==========================================
echo    INSTALLATION COMPLETE!
echo ==========================================
echo.
echo YDAU has been successfully installed!
echo.
echo You can now:
echo 1. Click the YDAU icon on your Desktop
echo 2. Search for "YDAU" in Windows Search
echo 3. Find YDAU in your Start Menu
echo 4. Pin YDAU to your Taskbar
echo.
echo To start YDAU now, press any key...
echo ==========================================
pause >nul

start "" "YDAU.exe"
exit