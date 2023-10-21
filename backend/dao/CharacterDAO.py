import requests
import os
from .DataFetchHelpers import fetch_results_data, fetch_data

url = os.getenv("DATAAPI")

characterData = """
    id
    species
    status
    name
    type
    gender
    origin{
        id
        type
        dimension
        created
    }
    image
    created
"""


class CharacterDAO():
    
  def __init__(self):
      pass
  
  def list_characters(self):
    
    body = f"""
      query {{
        characters {{
          results {{
            {characterData}
          }}
        }}
      }}
    """  
        
        
    response = requests.post(url=url, json={"query": body})
    print("response status code: ", response.status_code)
    if response.status_code == 200:
        data = response.json()
        return fetch_results_data(data, "characters")
    else: return None
    
  def get_character(self, character_id):
    body = f"""
      query {{
        character(id: "{character_id}") {{
          {characterData}
        }}
      }}
    """
    response = requests.post(url=url, json={"query": body})
    print("response status code: ", response.status_code)
    if response.status_code == 200:
        data = response.json()
        return fetch_data(data, "character")
    else: return None
    
