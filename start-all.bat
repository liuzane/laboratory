@echo off

:: 检查Node版本是否在18和30之间
for /f "tokens=1 delims=. " %%a in ('node -v') do set NODE_VERSION=%%a
set NODE_VERSION=%NODE_VERSION:~1%

for /f "tokens=1 delims=." %%a in ("%NODE_VERSION%") do set MAJOR_VERSION=%%a

if %MAJOR_VERSION% LSS 18 (
  echo Error: Node.js version must be between 18 and 30, current version is %NODE_VERSION%
  exit /b 1
) else if %MAJOR_VERSION% GEQ 30 (
  echo Error: Node.js version must be between 18 and 30, current version is %NODE_VERSION%
  exit /b 1
)

:: 启动项目
cd ./root
call start.bat
echo over

cd ../entry
call start.bat
echo over

cd ../login
call start.bat
echo over

cd ../vue
call start.bat
echo over

cd ../react
call start.bat
echo over

cd ../solar-system
call start.bat
echo over
