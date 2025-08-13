# PowerShell script to create an executable wrapper for YDAU
# This creates a proper .exe file that can be searched and pinned

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$exePath = Join-Path $scriptPath "YDAU.exe"

# C# code for the executable wrapper
$source = @"
using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace YDAU
{
    class Program
    {
        [STAThread]
        static void Main()
        {
            try
            {
                string currentDir = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location);
                string batFile = Path.Combine(currentDir, "START_YDAU.bat");
                
                if (!File.Exists(batFile))
                {
                    MessageBox.Show("Cannot find START_YDAU.bat file!", "YDAU Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    return;
                }
                
                ProcessStartInfo psi = new ProcessStartInfo
                {
                    FileName = batFile,
                    WorkingDirectory = currentDir,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                    WindowStyle = ProcessWindowStyle.Hidden
                };
                
                Process.Start(psi);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error starting YDAU: " + ex.Message, "YDAU Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}
"@

# Compile the C# code to create an executable
Add-Type -TypeDefinition $source -Language CSharp -OutputAssembly $exePath -OutputType ConsoleApplication -ReferencedAssemblies "System.Windows.Forms"

if (Test-Path $exePath) {
    Write-Host "YDAU.exe created successfully!" -ForegroundColor Green
    Write-Host "You can now:" -ForegroundColor Yellow
    Write-Host "1. Search for 'YDAU' in Windows Search" -ForegroundColor Yellow
    Write-Host "2. Pin YDAU.exe to Start Menu or Taskbar" -ForegroundColor Yellow
    Write-Host "3. Create shortcuts anywhere" -ForegroundColor Yellow
} else {
    Write-Host "Failed to create YDAU.exe" -ForegroundColor Red
}