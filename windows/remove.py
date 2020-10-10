from github import Github
import sys
import os

#loading the .env files with the uservariables
token = os.environ["TOKEN"]

def remove():
    #logging in with the user
    user = Github(token).get_user()
    #fetching repo to remove and deleting
    repo = user.get_repo(name=str(sys.argv[1]))
    repo.delete()

if __name__ == "__main__":
    remove()