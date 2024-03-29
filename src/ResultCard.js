import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import "./ResultCard.css"
import moment from "moment";
import NumericInput from 'react-numeric-input';

export default function ResultCard(props) {

    const [open, setOpen] = useState(false);

    const [quantity, setQuantity] = useState(1);

    const numberDropdownStyling = {
        marginRight: "10px",
        width: "100px"
    };

    return (
        <Card border="info" key={props.index}>
            <Card.Header>
                <div className="flex-container">
                    <div className="left-flex-item bold">{props.data.name.toUpperCase()}</div>
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
                <div className="flex-container">
                    <div className="left-flex-item">
                        <Button onClick={() => setOpen(!open)}
                                aria-expanded={open}
                                variant="outline-info">Details</Button>
                    </div>
                    <div style={numberDropdownStyling}>
                        <NumericInput className="form-control" value={quantity} min={1}
                                      max={Math.min(10, props.data.tickets)} strict
                                      onChange={(value) => setQuantity(value)}/>
                    </div>
                    <Link to={{
                        pathname: '/reserve',
                        index: props.data.id,
                        quantity: quantity
                    }}>
                        <Button variant="success">Reserve</Button>
                    </Link>
                </div>
                <Collapse in={open}>
                    <div>
                        <br/>
                        <div>
                            <p><b>Junk:</b> {props.data.junkName}</p>
                            <p><b>Departure Time:</b> {moment(new Date(props.data.departureDttm)).format("hh:mm A")}</p>
                        </div>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}