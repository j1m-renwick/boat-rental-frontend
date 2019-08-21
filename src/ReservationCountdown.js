import React, {useEffect, useState} from "react";
import {reject, resolve} from "q";
import ReactCountdownClock from "react-countdown-clock";
import moment from "moment";

export default function ReservationCountdown() {

    // TODO remove hardcoding
    const apiUrl = "http://localhost:8080/reservations/reserve?tripId=5d480f44e2d7f4e24cac71a7&userId=124&quantity=14";

    const [expiryTime, setExpiryTime] = useState("");

    useEffect(() => {

        console.log("Calling: " + apiUrl);

        fetch(apiUrl, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                tripId: "5d480f44e2d7f4e24cac71a7",
                userId: "124",
                quantity: "14"
            })
        })
            .then(res => {
                    return resolve(res.json());
                }, err => reject(err))
            .then(res => {
                setExpiryTime(moment.duration(moment(res.expiryDttm).diff(moment.now())).seconds());
            })
    }, []);

    return (
        <ReactCountdownClock seconds={expiryTime}
                             color="#000"
                             alpha={0.9}
                             size={50}/>
    )
}