Add-Type -AssemblyName System.Drawing

# Create a 32x32 bitmap
$bitmap = New-Object System.Drawing.Bitmap(32, 32)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

# Set high quality
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

# Create gradient background
$rect = New-Object System.Drawing.Rectangle(0, 0, 32, 32)
$brush1 = [System.Drawing.Color]::FromArgb(102, 126, 234)
$brush2 = [System.Drawing.Color]::FromArgb(118, 75, 162)
$gradientBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $brush1, $brush2, 45)

# Fill background with rounded rectangle effect
$graphics.FillEllipse($gradientBrush, 2, 2, 28, 28)

# Add YDAU text
$font = New-Object System.Drawing.Font("Arial", 14, [System.Drawing.FontStyle]::Bold)
$textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$graphics.DrawString("Y", $font, $textBrush, 10, 8)

# Save as PNG
$bitmap.Save("assets\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)

# Create ICO file using .NET
$icon = [System.Drawing.Icon]::FromHandle($bitmap.GetHicon())
$fileStream = [System.IO.File]::Create("assets\icon.ico")
$icon.Save($fileStream)
$fileStream.Close()

# Cleanup
$graphics.Dispose()
$bitmap.Dispose()
$gradientBrush.Dispose()

Write-Host "YDAU icons created successfully!" -ForegroundColor Green
Write-Host "Files: assets\icon.png and assets\icon.ico" -ForegroundColor Green