#!/bin/bash

function create(){
    cd
    source ~/project-initiator/.env
    python3 $SCRIPTPATHCREATE $1 $2
    cd $DESTPATH$1
    git init
    touch README.md
    echo "# $1" >> README.md
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/$USERNAME/$1.git
    git push -u origin master
    $IDE .
    echo "successfully initiated $1 project!"
}

function remove(){
    cd
    source ~/project-initiator/.env
    python3 $SCRIPTPATHREMOVE $1
    rm -rf $DESTPATH$1
    echo "successfully deleted $1 project!"
}