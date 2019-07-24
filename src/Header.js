import React from "react";

export default function Header() {

    const headerStyle = {
        "background": "#ECECEC",
        "padding": "5px"
    };

    const h2Style = {
        "fontWeight": "bold",
        "display": "inline-block"
    };

    const refreshStyle = {
        "fontSize": "80%",
        "marginLeft": "10px"
    };

    return (
        <div style={headerStyle}>
            <h2 style={h2Style}>Who to follow</h2><a href="#" id="refreshBtn" style={refreshStyle}>Refresh</a>
        </div>
    )
}