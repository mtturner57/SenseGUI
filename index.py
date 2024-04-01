import eel
import sys
from random import randint

eel.init("web")

@eel.expose
def random_python():
    print("Printing random number..")
    return randint(1,100)

eel.init("web-old")
eel.start("intex.html")

# if __name__ == '__main__':
#     if sys.argv[1] == '--develop':
#         eel.init('public')
#         eel.start({"port": 3000}, host="localhost", port=8888)
#     else:
#         eel.init('build')
#         eel.start('index.html')