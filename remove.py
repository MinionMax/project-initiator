from github import Github
import sys
import os
from dotenv import load_dotenv

#loading the .env files with the uservariables
load_dotenv()

token = os.getenv("TOKEN")

def remove():
    #logging in with the user
    user = Github(token).get_user()
    #fetching repo to remove and deleting
    repo = user.get_repo(name=str(sys.argv[1]))
    repo.delete()

if __name__ == "__main__":
    remove()




