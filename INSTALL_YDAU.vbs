' YDAU Installation Script
' Creates shortcuts and makes the app searchable in Windows

Option Explicit

Dim objShell, objFSO, strDesktop, strStartMenu, strAppPath
Dim objShortcut, strIconPath, strBatPath

Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Get paths
strAppPath = objFSO.GetParentFolderName(WScript.ScriptFullName)
strDesktop = objShell.SpecialFolders("Desktop")
strStartMenu = objShell.SpecialFolders("Programs")
strBatPath = strAppPath & "\START_YDAU.bat"
strIconPath = strAppPath & "\assets\icon.ico"

' Create Desktop Shortcut
Set objShortcut = objShell.CreateShortcut(strDesktop & "\YDAU.lnk")
objShortcut.TargetPath = strBatPath
objShortcut.WindowStyle = 7 ' Minimized window
objShortcut.IconLocation = strIconPath
objShortcut.Description = "Yokogawa Data Acquisition Utility"
objShortcut.WorkingDirectory = strAppPath
objShortcut.Save

' Create Start Menu folder and shortcut
Dim strStartMenuFolder
strStartMenuFolder = strStartMenu & "\YDAU"
If Not objFSO.FolderExists(strStartMenuFolder) Then
    objFSO.CreateFolder(strStartMenuFolder)
End If

' Create Start Menu Shortcut
Set objShortcut = objShell.CreateShortcut(strStartMenuFolder & "\YDAU.lnk")
objShortcut.TargetPath = strBatPath
objShortcut.WindowStyle = 7
objShortcut.IconLocation = strIconPath
objShortcut.Description = "Yokogawa Data Acquisition Utility"
objShortcut.WorkingDirectory = strAppPath
objShortcut.Save

' Create Uninstall shortcut
Set objShortcut = objShell.CreateShortcut(strStartMenuFolder & "\Uninstall YDAU.lnk")
objShortcut.TargetPath = strAppPath & "\UNINSTALL_YDAU.vbs"
objShortcut.WindowStyle = 1
objShortcut.IconLocation = "shell32.dll,31"
objShortcut.Description = "Uninstall YDAU"
objShortcut.WorkingDirectory = strAppPath
objShortcut.Save

MsgBox "YDAU has been successfully installed!" & vbCrLf & vbCrLf & _
       "✓ Desktop shortcut created" & vbCrLf & _
       "✓ Start Menu entry created" & vbCrLf & _
       "✓ You can now search for 'YDAU' in Windows" & vbCrLf & vbCrLf & _
       "Click OK to finish installation.", 64, "YDAU Installation Complete"

' Cleanup
Set objShortcut = Nothing
Set objFSO = Nothing
Set objShell = Nothing