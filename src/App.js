import React from "react";
import './App.css';
import MyComponent from "./MyComponent";
import Suggestions from "./Suggestions";
import Header from "./Header";

const bodyStyle = {
    "fontFamily": "sans-serif",
    "padding": "10px"
};


function App() {

    return (
        <div style={bodyStyle}>
            <Header/>
            <Suggestions/>
            <MyComponent/>
        </div>
    );
}

export default App;
