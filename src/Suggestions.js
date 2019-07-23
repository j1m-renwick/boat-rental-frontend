import React from "react";
import Row from "./Row";

const suggestionsStyle = {
    "border": "2px solid #ECECEC"
};

function Suggestions() {
    return (
        <ul style={suggestionsStyle}>
            <Row/>
            <Row/>
            <Row/>
        </ul>
    )
}

export default Suggestions