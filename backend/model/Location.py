class Location:
    
    def __init__(self, _id, name, _type, dimension, residents, created):
        self.__id = _id
        self.__name = name 
        self.__type = _type
        self.__dimension = dimension
        self.__residents = residents
        self.__created = created
    
    
    @property
    def id(self):
        return self.__id

    @property
    def name(self):
        return self.__name

    @property
    def type(self):
        return self.__type

    @property
    def dimension(self):
        return self.__dimension

    @property
    def residents(self):
        return self.__residents

    @property
    def url(self):
        return self.__url

    @property
    def created(self):
        return self.__created

    @id.setter
    def id(self, value):
        self.__id = value

    @name.setter
    def name(self, value):
        self.__name = value

    @type.setter
    def type(self, value):
        self.__type = value

    @dimension.setter
    def dimension(self, value):
        self.__dimension = value

    @residents.setter
    def residents(self, value):
        self.__residents = value

    @url.setter
    def url(self, value):
        self.__url = value

    @created.setter
    def created(self, value):
        self.__created = value