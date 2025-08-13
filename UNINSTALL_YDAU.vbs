' YDAU Uninstallation Script
' Removes shortcuts and cleans up

Option Explicit

Dim objShell, objFSO, strDesktop, strStartMenu
Dim intResponse

Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

intResponse = MsgBox("Are you sure you want to remove YDAU shortcuts?", 36, "Uninstall YDAU")

If intResponse = 6 Then ' User clicked Yes
    strDesktop = objShell.SpecialFolders("Desktop")
    strStartMenu = objShell.SpecialFolders("Programs")
    
    ' Remove Desktop shortcut
    If objFSO.FileExists(strDesktop & "\YDAU.lnk") Then
        objFSO.DeleteFile strDesktop & "\YDAU.lnk"
    End If
    
    ' Remove Start Menu folder and shortcuts
    If objFSO.FolderExists(strStartMenu & "\YDAU") Then
        objFSO.DeleteFolder strStartMenu & "\YDAU", True
    End If
    
    MsgBox "YDAU shortcuts have been removed successfully!", 64, "Uninstall Complete"
Else
    MsgBox "Uninstallation cancelled.", 64, "Cancelled"
End If

' Cleanup
Set objFSO = Nothing
Set objShell = Nothing