class Character:
    def __init__(self, _id, name, status, species, _type, gender, origin, location, image, created):
        self.__id = _id
        self.__name = name
        self.__status = status
        self.__species = species
        self.__type = _type
        self.__gender = gender
        self.__origin = origin
        self.__location = location
        self.__image = image
        self.__created = created

    @property
    def id(self):
        return self.__id

    @property
    def name(self):
        return self.__name

    @property
    def status(self):
        return self.__status

    @property
    def species(self):
        return self.__species

    @property
    def type(self):
        return self.__type

    @property
    def gender(self):
        return self.__gender

    @property
    def origin(self):
        return self.__origin

    @property
    def location(self):
        return self.__location

    @property
    def image(self):
        return self.__image

    @property
    def episode(self):
        return self.__episode

    @property
    def created(self):
        return self.__created

    @id.setter
    def id(self, value):
        self.__id = value

    @name.setter
    def name(self, value):
        self.__name = value

    @status.setter
    def status(self, value):
        self.__status = value

    @species.setter
    def species(self, value):
        self.__species = value

    @type.setter
    def type(self, value):
        self.__type = value

    @gender.setter
    def gender(self, value):
        self.__gender = value

    @origin.setter
    def origin(self, value):
        self.__origin = value

    @location.setter
    def location(self, value):
        self.__location = value

    @image.setter
    def image(self, value):
        self.__image = value

    @episode.setter
    def episode(self, value):
        self.__episode = value

    @created.setter
    def created(self, value):
        self.__created = value
