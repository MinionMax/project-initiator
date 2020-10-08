## windows installation
For the script to work you will need the following:
- git
- python3
- pip (usually comes with python)
- doskey

Once you have all of the above installed you can start:

Open up the command prompt and navigate to your root directory:
```cmd
cd C:\users\name
```
First clone the repository:
```cmd
git clone https://github.com/MinionMax/project-initiator
```
Then navigate to the folder:
```cmd
cd C:\users\name\project-initiator
```
Install the dependencies/requirements:
```cmd
pip install -r requirements.txt
```
### note
Please check if you have doskey activated using "doskey help".
If doskey responds with commands you're good to go!<br/>
If not please follow this [tutorial](https://superuser.com/a/1009512)

## setup
Now that you have installed the script you will need to set it up for your enviroment.<br/>
For the most part you will need to create user enviroment variables.<br/>
Tap the windows key and type env and enter. Now select enviroment variables and under ur USER variables create the following using NEW.<br/>
- DESTPATH (this will be your projects folder where your folders will be created) enter the filepath
- SCRIPTPATH, simply enter the path to the enclosing folder of the scripts
- GHUSERNAME, enter your GitHub username
- TOKEN
  - For the token (in case you don't have one yet) you can follow this [tutorial](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). the token will have to have access to: admin:public_key and delete_repo.
- IDE, enter one of the following:
  - __visual studio code__: code, __atom__: atom, __sublime text__: subl, __textmate__: mate.<br/>
 
 Finally configure your command for the script, in my case I'll be using "create":
 ```cmd
 doskey create="C:\users\user\project-initiator\windows\create.bat" $1 $2
 ```
 aaand you're done!
 
 also check out this [note](https://github.com/MinionMax/project-initiator#important-note)
