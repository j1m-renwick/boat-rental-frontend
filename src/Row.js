import React from "react";

const suggestionStyle = {"padding": "5px"};

const linkStyle = {
    "display": "inline-block",
    "position": "relative",
    // "bottom": "15px",
    "left": "5px"
};

function Row() {
    return (
        <li style={suggestionStyle}>
            <a href="#" target="_blank" style={linkStyle}>this will not be displayed</a>
            <a href="#" style={linkStyle}>x</a>
        </li>
    )
}

export default Row