# project initiator

## about
the project initiator is a simple automation script to run from your command line.
at the time being it's only compatible with the shell terminal.

## installation
for the script to work you will need the following:
- git
- python3
- pip
once you have all of the above installed you can start:

open up the terminal.
first clone the repository:
```shell
git clone 
```
then navigate to the folder:
```shell
cd ~/project-initiator
```
install the dependencies/requirements:
```shell
pip install requirements.txt
```

## setup
now that you have installed the script you will need to set it up for your enviroment.

start by navigating to the script folder:
```shell
cd ~/project-initiator
```
now open the .env file:
```shell
open .env
```
or use your IDE to open it i.e.:
```shell
code .env
```
in case you are unable to open it follow this [link](https://stackoverflow.com/questions/29955500/code-not-working-in-command-line-for-visual-studio-code-on-osx-mac).
in the .env file enter your github username between the double quotes in the USERNAME row.
for the token (in case you don't have one yet) you can follow this [link](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). the token will have to have access to: admin:public_key and delete_repo.
once you have generated the token paste it between the double quotes in the TOKEN row.
next you have to copy the path to the create.py script (path/to/create.py) and paste it to the SCRIPTPATH row.
to finish up grab the path to your projects folder (your new projects will be saved here) and paste it to the DESTPATH row.
you can optionally enter the name of your IDE to have the project opened for you as well:
__visual studio code__: code, __atom__: atom, __sublime text__: subl, __textmate__: mate.
by default this is set to visual studio code
incase the command doesn't work for you check if you have the _shell commands_ installed.
__save the changes!__

### shell costumization
without this you would have to use a source call before using the create command so let's create an alias for this.

open your terminal and type:
```shell
open ~/.bash_profile
```
you can also do this in your IDE with the process i described above.
in the .bash_profile file create an alias:
```shell
alias projectinit="source path/to/create.sh"
```
of course you will need to enter your own pathfile for the _create.sh_ file.
of course you can enter any command you fancy, in my case I just used projectinit...
__save the changes!__

## usage
to use the command simply open the terminal and type your custom command you entered in the .bash_profile file and hit return.
then call create followed by your project name and your visibility settings (use: private or enter nothing).

a succesfull call for a private repo should look like this:
```shell
projectinit ehre private
```
public repo:
```shell
projectinit ehre 
```
_happy coding_
