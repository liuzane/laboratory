# define functions
function Write-Color([String[]]$Text, [ConsoleColor[]]$Color) {
  for ($i = 0; $i -lt $Text.Length; $i++) {
    Write-Host $Text[$i] -Foreground $Color[$i] -NoNewLine
  }
  Write-Host
}

# get arguments
$title = $args[0]
$developCommand = $args[1]
$buildCommand = $args[2]

# set default command
if (!$developCommand) {
  $developCommand = "dev"
}

if (!$buildCommand) {
  $buildCommand = "build"
}

# set window title
$host.ui.RawUI.WindowTitle = $title

# clear screen
cls

# get project path
$projectPath = (Get-Location).Path

# output project information
Write-Color -Text "Project: ", $title -Color Cyan, Green
Write-Output ""
Write-Color -Text "Path: ", $projectPath -Color Cyan, Green
Write-Output ""
Write-Color -Text "To Develop: ", "npm run $developCommand" -Color Cyan, Red
Write-Output ""
Write-Color -Text "To Build: ", "npm run $buildCommand" -Color Cyan, Red
Write-Output ""

# run npm command
Write-Output "npm run $developCommand"
npm run $developCommand
