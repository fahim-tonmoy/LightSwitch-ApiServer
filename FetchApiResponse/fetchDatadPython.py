import requests

url = "https://gorest.co.in/public/v1/users"

# fetching data from api
response = requests.get( url)
myjson = response.json()

# this will print the data in console
print(myjson)