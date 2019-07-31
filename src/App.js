import React from "react";
import './App.css';
import SearchBox from "./SearchBox";
import Alert from "react-bootstrap/Alert";

function App() {

    return (
        <div className="container">
            <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
            </div>
            <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
            </div>

            <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
            </div>

            <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
            </div>
            <div className="logo">
                <img alt="can't find logo" src="/logo.png"/>
            </div>
            <SearchBox/>
            <Alert variant="primary">
                Nothing's been searched for yet...
            </Alert>
        </div>
    );
}

export default App;
