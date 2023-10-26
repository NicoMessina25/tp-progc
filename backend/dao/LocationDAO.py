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
    
  def __get_residents_number_by_attribute(self,residents,attribute,value):
    number = 0 
    for resident in residents:
      if resident[attribute].lower() == value:
        number += 1
    return number
  
  def __get_number_current_guests(self,residents,location_id):
    guest = 0
    for resident in residents:
      if resident["origin"]["id"] != location_id:
        guest += 1
    return guest

  
  def get_location_stats(self,location_id):       
    body = f"""
      query {{
        location(id: "{location_id}") {{
          residents{{
            species,
            status
            origin{{
              id
            }}
          }}
        }}
      }}
    """
    
    response = requests.post(url=url, json={"query": body})
    print("response status code: ", response.status_code)
  
    
    if response.status_code == 200:
        data = response.json()
        residents = fetch_data(data, "location")["residents"]
        
        result = {}
        result["alive"] = self.__get_residents_number_by_attribute(residents,"status","alive")
        result["dead"] = self.__get_residents_number_by_attribute(residents,"status","dead")
        result["current_guests"] = self.__get_number_current_guests(residents,location_id)
        result["robots_aliens_humans"] = {}
        result["robots_aliens_humans"]["robots"] = self.__get_residents_number_by_attribute(residents,"species","robot")
        result["robots_aliens_humans"]["aliens"] = self.__get_residents_number_by_attribute(residents,"species","alien")
        result["robots_aliens_humans"]["humans"] = self.__get_residents_number_by_attribute(residents,"species","human")
        
        print(result)
        return result
    else: return None
    