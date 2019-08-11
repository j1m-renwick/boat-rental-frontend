import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";

export default function ResultCard(props) {

    const [open, setOpen] = useState(false);

    return (
        <Card key={props.index}>
            <Card.Header>
                <div style={{"display": "flex", "alignItems":"center"}}>
                    <div style={{"flex": "1", "fontFamily": "Impact, Charcoal, sans-serif"}}>{props.data.name.toUpperCase()}</div>
                    <div><b>Tickets Left:</b> {props.data.tickets}</div>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{props.data.description}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                <Button onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        variant="outline-info">Details</Button>
                <Collapse in={open}>
                    <div>
                        <br/>
                        <div>
                            <p><b>Junk:</b> {props.data.junkName}</p>
                            <p><b>Departure Time:</b> {new Date(props.data.departureDttm).toLocaleTimeString("uk")}</p>
                        </div>
                    </div>
                </Collapse>

            </Card.Body>
        </Card>
    )
}