import React from 'react';
import Container from "react-bootstrap/Container";
import Logo from "./Logo";
import ReservationCountdown from "./ReservationCountdown";


export default function ReservationBookingPage(props) {

    return (
        <Container>
            <Logo/>
            <div className="header">
                <div>Holding reservation for trip Id: {props.location.index}</div>
                <ReservationCountdown tripId={props.location.index}/>
            </div>
        </Container>
    )
}