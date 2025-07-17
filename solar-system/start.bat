:: start "Element Plus" /d D:\WorkSpace\Frontend\element-plus cmd /k "echo yarn website-dev && yarn website-dev"
:: powershell -File script\powershell.ps1
start Powershell -executionpolicy RemoteSigned -noexit -file "..\script\powershell.ps1" "Laboratory Solar-System"
:: start "Root" Powershell -executionpolicy RemoteSigned -noexit -file "script\color.ps1"
:: start "myapp" powershell.exe -NoExit -Command "dotnet myapp"