import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";

import { eel } from "./eel.js";

function App() {
  const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  const [celciusTemp, setCelciusTemp] = useState(0);
  const [fahrenheitTemp, setFahrenheitTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  if (isDevelopment){
    eel.set_host('ws://localhost:8888');
  }

  // Temperature
  useEffect(() => {
    const interval = setInterval(() => {
      eel.getCelciusTemperature()((x) => {
        let celciusTemp = Number(x);
        setCelciusTemp(celciusTemp.toFixed(2));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Humidity
  useEffect(() => {
    const interval = setInterval(() => {
      eel.getHumidity()((x) => {
        let humidity = Number(x);
        setHumidity(humidity.toFixed(2));
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Pressure
  useEffect(() => {
    const interval = setInterval(() => {
      eel.getBarometricPressure()((x) => {
        let pressure = Number(x);
        setPressure(pressure.toFixed(2));
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  
  // Black background
  // Blue oval that pulses underneath when temp changes.
  // Temperature
  //    Show both celcius and Farenheight
  // Pressure
  //    Show ideal pressures for fish? Maybe make the temp a color to show that
  // Put in loader or message while it is waiting for the data to come in from the loop

  return (
      <div className={styles.App}>
        <div className={styles.temperature_container}>
          <div className={styles.celcius_container}>
            <div className={styles.celcius_temp}>
              {celciusTemp}
            </div>
            <div className={styles.platform}></div>
          </div>
        </div>
        <div className={styles.others_container}>
          <div className={styles.pressure_container}>
            <div className={styles.pressure}>{pressure}</div>
            <div className={styles.platform}></div>
          </div>
          <div className={styles.humidity_container}>
            <div className={styles.humidity}>{humidity}</div>
            <div className={styles.platform}></div>
          </div>
        </div>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {`${randInt}`}
        </p>*/}
      </div>
    );
};

export default App;
