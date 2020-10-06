# project initiator

## about
The "project initiator" is a simple automation script to run from your command line.
It creates a folder in your destined projects folder, creates a readme and commits it to your github account.
At the time being it's only compatible with the shell terminal.

## installation
For the script to work you will need the following:
- git
- python3
- pip

Once you have all of the above installed you can start:

Open up the terminal.
First clone the repository:
```shell
git clone 
```
Then navigate to the folder:
```shell
cd ~/project-initiator
```
Install the dependencies/requirements:
```shell
pip install requirements.txt
```

## setup
Now that you have installed the script you will need to set it up for your enviroment.

Start by navigating to the script folder:
```shell
cd ~/project-initiator
```
Now open the .env file:
```shell
open .env
```
Or use your IDE to open it i.e.:
```shell
code .env
```
In case you are unable to open it follow this [tutorial](https://stackoverflow.com/questions/29955500/code-not-working-in-command-line-for-visual-studio-code-on-osx-mac).
In the .env file enter your github username between the double quotes in the USERNAME row.
For the token (in case you don't have one yet) you can follow this [tutorial](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). the token will have to have access to: admin:public_key and delete_repo.
Once you have generated the token paste it between the double quotes in the TOKEN row.
Next you have to copy the path to the create.py script (path/to/create.py) and paste it to the SCRIPTPATH row.
To finish up grab the path to your projects folder (your new projects will be saved here) and paste it to the DESTPATH row.
You can optionally enter the name of your IDE to have the project opened for you as well:

__visual studio code__: code, __atom__: atom, __sublime text__: subl, __textmate__: mate.
By default this is set to visual studio code.

In case the command doesn't work for you check if you have the _shell commands_ installed.
__save the changes!__

### shell costumization
Without this you would have to use a source call before using the create command so let's create an alias for this.

Open your terminal and type:
```shell
open ~/.bash_profile
```
You can also do this in your IDE with the process i described above.
In the .bash_profile file create an alias:
```shell
alias projectinit="source path/to/create.sh"
```
of course you will need to enter your own pathfile for the _create.sh_ file.
You can enter any command you fancy, in my case I just used projectinit...
__save the changes!__

## usage
To use the command simply open the terminal and type your custom command you entered in the .bash_profile file and hit return.
Then call create followed by your project name and your visibility settings (use: private or enter nothing).

A correct call for a private repo should look like this:
```shell
create ehre private
```
Public repo:
```shell
create ehre public
```
_happy coding_
