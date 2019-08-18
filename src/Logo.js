import React from 'react';

export default function Logo() {
    return (
        <>
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
        </>
    )
}