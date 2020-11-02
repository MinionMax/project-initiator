@echo off

cd %SCRIPTPATH%

python3 create.py %1 %2

cd %DESTPATH%\%1
git init
echo # %1 > README.md
type nul > .gitignore
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/%GHUSERNAME%/%1.git
git push -u origin master
%IDE% .
echo "successfully initiated %1 project!"
