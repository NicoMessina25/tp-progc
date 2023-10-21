import requests
import os
from .DataFetchHelpers import fetch_results_data, fetch_data

url = os.getenv("DATAAPI")


locationData = """
  id
  type
  dimension
  name
  residents{
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
  }
  created
"""

class LocationDAO():
    
  def __init__(self):
      pass
  
  def list_locations(self, filter):
    
    body = f"""
      query {{
        locations(filter: {{type: "{filter["type"]}", dimension: "{filter["dimension"]}"}}) {{
          results {{
            {locationData}
          }}
        }}
      }}
      """

    response = requests.post(url=url, json={"query": body})
    print("response status code: ", response.status_code)
    if response.status_code == 200:
        data = response.json()
        return fetch_results_data(data, "locations")
    else: return None

 
  def get_location(self,location_id):       
    body = f"""
      query {{
        location(id: "{location_id}") {{
          {locationData}
        }}
      }}
    """
    
    response = requests.post(url=url, json={"query": body})
    print("response status code: ", response.status_code)
    if response.status_code == 200:
        data = response.json()
        return fetch_data(data, "location")
    else: return None
    