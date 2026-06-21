import os
from dotenv import load_dotenv

load_dotenv()

psswd = os.environ["MONGO_PASSWORD"]
dbname = os.environ.get("MONGO_DBNAME", "migration")
dbuser = os.environ["MONGO_USER"]
host = os.environ["MONGO_HOST"]
parameters = os.environ.get("MONGO_PARAMS", "retryWrites=true&w=majority&appName=Cluster0")
