import React from 'react';


export default function NewPage(props) {

    return (
        <div className="container">
            <div className="bird-container bird-container--one">
                <div className="bird bird--one"/>
            </div>
            <div className="bird-container bird-container--two">
                <div className="bird bird--two"/>
            </div>

            <div className="bird-container bird-container--three">
                <div className="bird bird--three"/>
            </div>

            <div className="bird-container bird-container--four">
                <div className="bird bird--four"/>
            </div>
            <div className="logo">
                <img alt="can't find logo" src="/logo.png"/>
            </div>
            <div>I'm a new page!</div>

            <div>Item index: {props.location.index}</div>
        </div>
    )
}