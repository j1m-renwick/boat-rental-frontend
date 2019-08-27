import React, {useEffect, useState} from "react";
import {reject, resolve} from "q";
import ReactCountdownClock from "@j1m/rcc";
import moment from "moment";

export default function ReservationCountdown(props) {

    // TODO remove hardcoding
    const API_URL = "http://localhost:8080/reservations/reserve";

    const MAX_COUNTDOWN_SECONDS = 60;
    const API_HEADERS = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const [expiryTime, setExpiryTime] = useState(-1);
    const [ready, setReady] = useState(false);

    useEffect(() => {

        if (!ready) {
            console.log("Calling: " + API_URL);
            console.log("TRIP ID: " + props.tripId);

            fetch(API_URL, {
                method: "post",
                headers: API_HEADERS,
                body: JSON.stringify({
                    tripId: props.tripId,
                    userId: "124",
                    quantity: "14"
                })
            })
                .then(res => {
                    return resolve(res.json());
                }, err => reject(err))
                .then(res => {
                    setExpiryTime(moment.duration(moment(res.expiryDttm).diff(moment.now())).seconds());
                    setReady(true)
                })
        }
    }, []);


    return (

        ready ?
            <ReactCountdownClock maxSeconds={MAX_COUNTDOWN_SECONDS}
                                 seconds={expiryTime}
                                 color="#000"
                                 alpha={0.9}
                                 size={50}/>
        : <></>
    )
}