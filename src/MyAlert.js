import Alert from "react-bootstrap/Alert";
import React, {useState, useEffect} from "react";
import {combinedStream} from "./Streams"

export default function MyAlert() {

    const [harbourParam, setHarbourParam] = useState("");
    const [tripTypeParam, setTripTypeParam] = useState("");
    const [dateParam, setDateParam] = useState("");

    useEffect(() => {

        let stream = combinedStream.subscribe(data => {
            setDateParam(data[0]);
            setHarbourParam(data[1]);
            setTripTypeParam(data[2]);
        });

        return () => stream.unsubscribe();

    }, []);

    return (
        <Alert variant="primary">
            Date : {dateParam}
            <br/>
            Harbour : {harbourParam}
            <br/>
            Trip Type : {tripTypeParam}
        </Alert>
    )
}