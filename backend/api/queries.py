from model.Location import Location
from dao.LocationDAO import LocationDAO
from dao.CharacterDAO import CharacterDAO
from .ResultDTO import ResultDTO


def list_locations_resolver(obj, info,filter):
    try:
        data = LocationDAO().list_locations(filter)
        payload = ResultDTO(True, [], data) 
    except Exception as error:
        payload = ResultDTO(False, [str(error)], [])
    
    return payload

def get_location_resolver(obj, info,location_id):
    try:
        data = LocationDAO().get_location(location_id)
        payload = ResultDTO(True, [], data) 
    except Exception as error:
        payload = ResultDTO(False, [str(error)], [])
    
    return payload

def list_characters_resolver(obj, info):
    try:
        data = CharacterDAO().list_characters()
        payload = ResultDTO(True, [], data) 
    except Exception as error:
        payload = ResultDTO(False, [str(error)], [])
    
    return payload 

def get_character_resolver(obj, info,character_id):
    try:
        data = CharacterDAO().get_character(character_id)
        payload = ResultDTO(True, [], data) 
    except Exception as error:
        payload = ResultDTO(False, [str(error)], [])
    
    return payload
