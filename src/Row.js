import React, {useState, useEffect} from "react";
import {getSuggestionStream} from "./Observe";

function Row(props) {

    const [name, setName] = useState("LOADING...");

    const rowId = "closeBtn" + props.btnId;

    useEffect(() => {

        var thing = getSuggestionStream(rowId)
            .subscribe(json => {
                setName(json.login)
            });

        // returned function will be called when the component unmounts
        return () => thing.unsubscribe();

        // an input of empty array means useEffect will only be called once
    }, [rowId]);

    return (
        <li>{name}<a href="#" id={rowId} className="close">x</a>
        </li>
    )
}

export default Row