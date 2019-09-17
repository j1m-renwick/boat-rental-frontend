import React from "react";
import '../App.css';
import SearchBox from "../SearchBox";
import {ResultsScroll} from "../ResultsScroll";

function LandingPage() {

    return (
        <>
            <SearchBox/>
            {/*<AutoCloseToast/>*/}
            {/*<MyAlert/>*/}
            <br/>
            <ResultsScroll/>
        </>
    );
}

export default LandingPage;
