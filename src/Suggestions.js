import React from "react";
import Row from "./Row";

const suggestionsStyle = {
    "border": "2px solid #ECECEC"
};

export default function Suggestions() {

    return (
        <ul style={suggestionsStyle}>
            <Row btnId="1"/>
            <Row btnId="2"/>
            <Row btnId="3"/>
        </ul>
    )
}