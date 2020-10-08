import os
import sys
path = os.environ["DESTPATH"]
name = str(sys.argv[1])
os.makedir(path + str(name))