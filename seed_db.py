import pandas as pd
from pymongo import MongoClient
from dbconfig import dbname, dbuser, psswd, host, parameters

connection_string = 'mongodb+srv://' + dbuser + ':' + psswd + host + '/' + dbname + '?' + parameters
client = MongoClient(connection_string)
db = client[dbname]

datasets = [
    ("global_areas",   "static/data/global_areas.csv"),
    ("top5countries",  "static/data/top_5_countries.csv"),
    ("top10countries", "static/data/top_10_countries.csv"),
]

for collection_name, csv_path in datasets:
    df = pd.read_csv(csv_path)
    html_table = df.to_html(classes="table table-striped table-bordered", index=False)
    col = db[collection_name]
    col.drop()
    col.insert_one({"html_table": html_table})
    print(f"  {collection_name}: {len(df)} rows loaded.")

print("Done.")
