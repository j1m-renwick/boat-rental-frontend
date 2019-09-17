import React from "react";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavigationBar() {

    // to keep the link colour the same whether visited or not
    const urlUnvisitedStyle = {
        color: "rgba(255,255,255,.5)"
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand>JUNKLYFE</Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
                <Link to="/">
                    <Nav.Link href="/" style={urlUnvisitedStyle}>My Trips</Nav.Link>
                </Link>
                <Link to="/">
                    <Nav.Link href="/" style={urlUnvisitedStyle}>Junk Buddies</Nav.Link>
                </Link>
            </Nav>
            <Link to="/login">
                <Button variant="outline-primary">Log In</Button>
            </Link>
        </Navbar>
    )
}