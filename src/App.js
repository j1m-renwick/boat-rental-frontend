import React from "react";
import './App.css';
import SearchBox from "./SearchBox";
import MyAlert from "./MyAlert";
import {ResultsScroll} from "./ResultsScroll";
import {AutoCloseToast} from "./AutoCloseToast";
import Container from "react-bootstrap/Container";
import Logo from "./Logo";

function App() {

    return (
        <Container>
            <Logo/>
            <SearchBox/>
            {/*<AutoCloseToast/>*/}
            {/*<MyAlert/>*/}
            <br/>
            <ResultsScroll/>
        </Container>
    );
}

export default App;
