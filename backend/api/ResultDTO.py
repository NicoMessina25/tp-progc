class ResultDTO:
    def __init__(self, success, errors, data):
        self.__success = success
        self.__errors = errors
        self.__data = data

    @property
    def success(self):
        return self.__success

    @success.setter
    def success(self, value):
        self.__success = value

    @property
    def errors(self):
        return self.__errors

    @errors.setter
    def errors(self, value):
        self.__errors = value

    @property
    def data(self):
        return self.__data

    @data.setter
    def data(self, value):
        self.__data = value