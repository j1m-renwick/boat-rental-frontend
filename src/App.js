import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import Suggestions from "./Suggestions";
import {fromEvent, combineLatest, merge} from 'rxjs';
import {debounceTime, flatMap, map, startWith} from "rxjs/operators";
import {fromPromise} from "rxjs/internal-compatibility";
import Header from "./Header";
import {reject, resolve} from "q";
import {getRefreshButtonStream, responseStream} from "./Observe";

const bodyStyle = {
    "fontFamily": "sans-serif",
    "padding": "10px"
};


function App() {

    // const [suggestions, setSuggestions] = useState([]);
    //
    // useEffect(() => {
    //
    //     var thing = getRefreshButtonStream()
    //         .subscribe(json => {
    //             setSuggestions(json)
    //         });
    //
    //     // returned function will be called when the component unmounts
    //     return () => thing.unsubscribe();
    //
    //     // an input of empty array means useEffect will only be called once
    // }, []);

    return (
        <div style={bodyStyle}>
            <Header/>
            <Suggestions/>
            <MyComponent/>
        </div>
    );
}

export default App;
