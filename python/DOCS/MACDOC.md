## mac installation
For the script to work you will need the following:
- git
- python3
- pip

Once you have all of the above installed you can start:

Open up the terminal and navigate to your root directory:
```shell
cd ~
```
First clone the repository:
```shell
git clone https://github.com/MinionMax/project-initiator
```
Then navigate to the folder:
```shell
cd ~/project-initiator
```
Install the dependencies/requirements:
```shell
pip install -r requirements.txt
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
In the .env file enter your github username between the double quotes in the GHUSERNAME row.
For the token (in case you don't have one yet) you can follow this [tutorial](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). the token will have to have access to: admin:public_key and delete_repo.
Once you have generated the token paste it between the double quotes in the TOKEN row.
To finish up grab the path to your projects folder (your new projects will be saved here) and paste it to the DESTPATH row.
You can optionally enter the name of your IDE to have the project opened for you as well:

__visual studio code__: code, __atom__: atom, __sublime text__: subl, __textmate__: mate.
By default this is set to visual studio code.

In case the command doesn't work for you check if you have the _shell commands_ installed.
__save the changes!__

### shell costumization
Without this you would have to use a source call before using the create command so let's create a command in our run control for this.

Open your terminal and type:
```shell
open ~/.bashrc
```
If you're using z-shell open ".zshrc".
You can also do this in your IDE with the process i described above.
In the .bashrc file create a source call:
```shell
source ~/project-initiator/project_init.sh
```
__save the changes!__

## usage
To use the command simply open the terminal and type your custom command you entered in the .bash_profile file and hit return.
Then call create followed by your project name and your visibility settings (use: private or public).

A correct call for a private repo should look like this:
```shell
create name private
```
Public repo:
```shell
create name public
```
To remove your project locally and from github:
```shell
remove name
```

To edit or rather set up your development enviroment in one command:
```shell
edit name
```