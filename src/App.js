import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import Suggestions from "./Suggestions";

const bodyStyle = {
    "fontFamily": "sans-serif",
    "padding": "10px"
};

const headerStyle = {
    "background": "#ECECEC",
    "padding": "5px"
};

function App() {
    return (
        <div style={bodyStyle}>
            <div style={headerStyle}>
                <h2>Who to follow</h2>
            </div>
            {/*<div className="App">*/}
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
            {/*</div>*/}
            <Suggestions/>
            <MyComponent/>
        </div>
    );
}

export default App;
