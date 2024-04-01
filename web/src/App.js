import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { eel } from "./eel.js";

function App() {
  const [randInt, setRandint] = useState(0);

  eel.set_host("ws://localhost:8888");
  eel.hello();

  useEffect(() => {
    eel.random_python()((x)=>{
      console.log(x);
      setRandint(x);
    });
  }, []);
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {`${randInt}`}
        </p>
      </div>
    );
};

export default App;
