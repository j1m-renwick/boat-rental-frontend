import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

export default function ResultCard(props) {

    return (
        <Card key={props.index} style={{"fontFamily": "Impact, Charcoal, sans-serif"}}>
        <Card.Header as="h5">{props.data.name}</Card.Header>
        <Card.Body>
            <Card.Title>{props.data.junkName}</Card.Title>
            <Card.Text>
                {props.data.description}
            </Card.Text>
            <Button variant="outline-primary">See more</Button>
        </Card.Body>
    </Card>
    )
}