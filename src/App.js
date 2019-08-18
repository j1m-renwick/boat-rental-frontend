import React from "react";
import './App.css';
import SearchBox from "./SearchBox";
import {ResultsScroll} from "./ResultsScroll";
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
