@echo off
title Creating YDAU Icon
echo ==========================================
echo    CREATING PROPER YDAU ICON FILES
echo ==========================================
echo.
echo This will create proper icon files for branding:
echo - assets\icon.ico (Windows executable icon)
echo - assets\icon.png (System tray and general use)
echo - assets\icon.svg (Vector source)
echo.

REM Create a simple 32x32 pixel YDAU icon using PowerShell
powershell -Command "
Add-Type -AssemblyName System.Drawing;
$bitmap = New-Object System.Drawing.Bitmap(32, 32);
$graphics = [System.Drawing.Graphics]::FromImage($bitmap);
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias;
$graphics.Clear([System.Drawing.Color]::Transparent);

# Create gradient background
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.Rectangle]::new(0, 0, 32, 32),
    [System.Drawing.Color]::FromArgb(102, 126, 234),
    [System.Drawing.Color]::FromArgb(118, 75, 162),
    45
);
$graphics.FillRectangle($brush, 0, 0, 32, 32);

# Add text 'Y' for YDAU
$font = New-Object System.Drawing.Font('Arial', 18, [System.Drawing.FontStyle]::Bold);
$textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White);
$graphics.DrawString('Y', $font, $textBrush, 8, 4);

$bitmap.Save('assets\icon.png', [System.Drawing.Imaging.ImageFormat]::Png);
$graphics.Dispose();
$bitmap.Dispose();

# Convert PNG to ICO format
$icon = [System.Drawing.Icon]::FromHandle((New-Object System.Drawing.Bitmap('assets\icon.png')).GetHicon());
$fileStream = [System.IO.File]::OpenWrite('assets\icon.ico');
$icon.Save($fileStream);
$fileStream.Close();

Write-Host 'YDAU icon files created successfully!' -ForegroundColor Green;
"

echo.
echo ==========================================
echo    ICON CREATION COMPLETE!
echo ==========================================
echo.
echo Files created:
echo - assets\icon.ico (Windows icon)
echo - assets\icon.png (PNG version)
echo.
echo These icons will be used throughout YDAU for:
echo - Application window icon
echo - System tray icon  
echo - Desktop shortcuts
echo - Start menu entries
echo - Installer branding
echo.
pause