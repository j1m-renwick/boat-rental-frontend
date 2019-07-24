import React from "react";
import './App.css';
import MyComponent from "./MyComponent";
import Suggestions from "./Suggestions";
import Header from "./Header";

function App() {

    return (
        <div className="body">
            <Header/>
            <Suggestions/>
            <MyComponent/>
        </div>
    );
}

export default App;
