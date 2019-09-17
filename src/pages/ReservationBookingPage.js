import React from 'react';
import ReservationCountdown from "../ReservationCountdown";


export default function ReservationBookingPage(props) {

    return (
        <div className="header">
            <div className="flex-container">
                <div className="left-flex-item">Holding reservation for trip Id: {props.location.index}</div>
                <ReservationCountdown tripId={props.location.index} quantity={props.location.quantity}/>
            </div>
        </div>
    )
}