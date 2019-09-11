import React from 'react';
import Container from "react-bootstrap/Container";
import Logo from "../Logo";
import ReservationCountdown from "../ReservationCountdown";


export default function ReservationBookingPage(props) {

    return (
        <Container>
            <Logo/>
            <div className="header">
                <div className="flex-container">
                    <div className="left-flex-item">Holding reservation for trip Id: {props.location.index}</div>
                    <ReservationCountdown tripId={props.location.index}/>
                </div>
            </div>
        </Container>
    )
}