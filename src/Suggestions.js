import React from "react";
import Row from "./Row";

export default function Suggestions() {

    return (
        <ul className="suggestions">
            <Row btnId="1"/>
            <Row btnId="2"/>
            <Row btnId="3"/>
        </ul>
    )
}