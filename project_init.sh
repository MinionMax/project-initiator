#!/bin/bash

function create(){
    source ~/project-initiator/.env
    python3 $SCRIPTPATHCREATE $1 $2
    cd $DESTPATH$1
    git init
    touch README.md
    echo "# $1" >> README.md
    touch .gitignore
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/$USERNAME/$1.git
    git push -u origin master
    $IDE .
    open https://github.com/$USERNAME/$1.git
    echo "successfully initiated $1 project!"
}

function remove(){
    source ~/project-initiator/.env
    python3 $SCRIPTPATHREMOVE $1
    rm -rf $DESTPATH$1
    echo "successfully deleted $1 project!"
}

function edit(){
    source ~/project-initiator/.env
    cd $DESTPATH$1
    $IDE .
    open https://github.com/$USERNAME/$1.git
}