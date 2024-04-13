# coding: utf-8
import eel
import sys
from random import randint
#from sense_hat import SenseHat

#init Sense Hat 
# sense = SenseHat()
# sense.clear()


@eel.expose
def hello():
    print('hello')

@eel.expose
def random_python():
    print("Printing random number..")
    return randint(1,100)

@eel.expose
def getCelciusTemperature():
    # sense.clear()
    # temperature = sense.get_temperature()
    temperature = 23.88889
    return temperature

@eel.expose
def getHumidity():
    # sense.clear()
    # humidity = sense.get_humidity()
    humidity = 72.88889
    return humidity

@eel.expose
def getBarometricPressure():
    # sense.clear()
    # barPressure = sense.get_pressure()
    barPressure = 1037.033333
    # Convert sense hat millibar pressure into inMg (best for determining if it matters or not)  
    inchesMercuryPressure = barPressure * 0.0295300
    return inchesMercuryPressure

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--develop':
        eel.init('client')
        eel.start({"port": 3000}, host="localhost", port=8888, cmdline_args=["--start-fullscreen"])
    else:
        eel.init('build')
        eel.start('index.html', cmdline_args=["--start-fullscreen"])
