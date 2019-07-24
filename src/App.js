import React from "react";
import './App.css';
import Ticker from "./Ticker";
import Suggestions from "./Suggestions";
import Header from "./Header";

function App() {

    return (
        <div className="container">
            <Header/>
            <Suggestions/>
            <Ticker/>
        </div>
    );
}

export default App;
