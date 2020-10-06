#!/bin/bash

function create(){
    cd
    #enter the path to the enclosing folder before the .env
    source .env
    python3 $SCRIPTPATH $1 $2
    cd $DESTPATH$1
    git init
    touch README.md
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/$USERNAME/$1.git
    git push -u origin master
    $IDE .
}