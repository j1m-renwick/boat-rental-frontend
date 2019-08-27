import React, {useEffect, useState} from "react";
import {reject, resolve} from "q";
import ReactCountdownClock from "@j1m/rcc";
import moment from "moment";

export default function ReservationCountdown(props) {

    // TODO remove hardcoding
    const apiUrl = "http://localhost:8080/reservations/reserve";

    const [expiryTime, setExpiryTime] = useState(-1);
    const [ready, setReady] = useState(false);

    useEffect(() => {

        if (!ready) {
            console.log("Calling: " + apiUrl);
            console.log("TRIP ID: " + props.tripId);

            fetch(apiUrl, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

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
            <ReactCountdownClock maxSeconds={60}
                                 seconds={expiryTime}
                                 color="#000"
                                 alpha={0.9}
                                 size={50}/>
        : <></>
    )
}