@echo off

cd %SCRIPTPATH%

python3 remove.py %1
del /f /q /s %DESTPATH%\%1
rmdir /q /s %DESTPATH%\%1