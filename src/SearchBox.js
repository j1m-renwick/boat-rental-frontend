import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";

export default function SearchBox() {

    return (
        <div className="header">
            <h5 style={{"color": "#E3FDFF", "fontFamily": "Impact, Charcoal, sans-serif"}}>PICK YOUR TRIP</h5>
            {/*<input className="search" type="text"/>*/}
            <InputGroup className="mb-3">
                <FormControl placeholder="Harbour..."/>
                <FormControl placeholder="Date..."/>
                <FormControl placeholder="Junk Type..."/>
            </InputGroup>
            {/*<div className="centered">*/}
            {/*    <Button variant="light" size="lg">Light</Button>*/}
            {/*</div>*/}
        </div>
    )
}