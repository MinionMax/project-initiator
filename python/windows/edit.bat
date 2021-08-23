@echo off

cd %DESTPATH\%1
%IDE% .
start "" https://github.com/%GHUSERNAME%/%1.git