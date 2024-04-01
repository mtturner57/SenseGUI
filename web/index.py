# coding: utf-8
import eel
import sys
from random import randint

@eel.expose
def hello():
    print('hello')
    
@eel.expose
def random_python():
    print("Printing random number..")
    return randint(1,100)

if __name__ == '__main__':
    if sys.argv[1] == '--develop':
        eel.init('client')
        eel.start({"port": 3000}, host="localhost", port=8888)
    else:
        eel.init('build')
        eel.start('index.html')
