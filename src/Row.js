import React, {useState, useEffect} from "react";
import {getSuggestionStream} from "./Observe";

function Row(props) {

    const [info, setInfo] = useState({"login":"LOADING..."});

    const rowId = "closeBtn" + props.btnId;

    useEffect(() => {

        var subStream = getSuggestionStream(rowId)
            .subscribe(json => {
                console.log(json);
                setInfo(json)
            });

        // returned function will be called when the component unmounts
        return () => subStream.unsubscribe();

        // an input of empty array means useEffect will only be called once
    }, [rowId]);

    return (
        <li>
            <div>
                <img src={info.avatar_url}/>
                <a href={info.html_url} rel="noopener noreferrer" target="_blank" className="username">{info.login}</a>
            </div>
            {/*even though the IDE doesn't like this, React knows to look in the public folder for the image*/}
            <img id={rowId} src="/closeIcon.png"/>
        </li>

    )
}

export default Row