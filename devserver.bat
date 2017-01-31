@echo off 
set NODE_HOME="C:\Program Files\nodejs"
for %%* in (.) do set CurrDirName=%%~n*
set APPDATA=%CD%\node_modules

echo %0
echo .
echo Using NodeJs from %NODE_HOME%
echo Using npm from %APPDATA%\npm
echo Setting up %CurrDirName% ...
echo .

CD C:\Users\jason\Desktop\Angular\Trial1
http-server -o

rem call %NODE_HOME%\nodevars.bat && npm run build && npm run run && pause || pause


