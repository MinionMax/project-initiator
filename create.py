from github import Github
import sys
import os
from dotenv import load_dotenv

#loading the .env files with the uservariables
load_dotenv()

path = os.getenv("DESTPATH")
token = os.getenv("TOKEN")

def create():
    #creating folder with input name
    folder = str(sys.argv[1])
    visibility = str(sys.argv[2])
    os.makedirs(path + str(folder))
    #logging in with the user
    user = Github(token).get_user()
    #checking wether private or public
    if (visibility == "private"):
        user.create_repo(folder, private=True)
    elif (visibility == "public"):
        #creating public repo
        user.create_repo(folder)

if __name__ == "__main__":
    create()
