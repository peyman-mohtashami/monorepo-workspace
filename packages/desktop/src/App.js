import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from "@vg10092019/shared/components/common/CustomButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CustomButton />
      </header>
    </div>
  );
}

export default App;
