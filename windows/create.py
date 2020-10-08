from github import Github
import sys
import os

#loading the .env files with the uservariables
path = os.environ["DESTPATH"]
token = os.environ["TOKEN"]

def create():
    #creating folder with input name
    folder = str(sys.argv[1])
    destination = os.path.join(path, folder)
    os.makedirs(destination)
    #logging in with the user
    user = Github(token).get_user()
    #checking whether private or public
    visibility = str(sys.argv[2])
    if (visibility == "private"):
        user.create_repo(folder, private=True)
    elif (visibility == "public"):
        #creating public repo
        user.create_repo(folder)
    else:
        print("PUBLIC")

if __name__ == "__main__":
    create()
