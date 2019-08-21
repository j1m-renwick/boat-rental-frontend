import React from 'react';
import Container from "react-bootstrap/Container";
import Logo from "./Logo";
import ReservationCountdown from "./ReservationCountdown";


export default function NewPage(props) {

    return (
        <Container>
            <Logo/>
            <div className="header">
                <div>I'm a new page!</div>
                <div>Trip Id: {props.location.index}</div>
                <ReservationCountdown/>
            </div>
        </Container>
    )
}