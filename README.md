# project initiator

## about
The "project initiator" is a simple automation script to run from your command line.
It creates a folder in your destined projects folder, creates a readme and commits it to your github account.

## get started
### prequirements
- node.js
- a github account

### installation
open your terminal and run
```sh
npm install -g MinionMax/project-initiator
```
if this fails you may need to run it as an administrator.<br>
the setup will then automatically start.<br>
in case it doesn't start on install, run
```sh
project setup
```
follow the instructions and you'll be fiiiiine.

### usage
to see all available commands you may also run
```sh
project -h
```
| argument | result                                        | flags                                                                             | example                             |
|----------|-----------------------------------------------|-----------------------------------------------------------------------------------|-------------------------------------|
| new      | create a new repo locally and on github       | -p: toggle private on github; -s: toggle silent mode (browser/ide will not open); | ```project new <name> -p -s  ``` |
| del      | delete the given repo locally and from github | none                                                                              | ```project del <name>  ```       |
| setup    | relaunch setup process of the CLI             | none                                                                              | ```project setup  ```            |


_happy coding_
