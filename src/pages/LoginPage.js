import React from "react";
import Container from "react-bootstrap/Container";
import Logo from "../Logo";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginPage() {

    return (
        <Container>
            <Logo/>
            <div className="header half-width center-horizontal text-centered">
                <h5 className="header-title" style={{"fontSize": "x-large", "paddingBottom": "10px"}}>ACCOUNT LOGIN</h5>
                <Form>
                    <Form.Control className="mb-4" type="email"
                                 placeholder="Enter your email"/>
                    <Form.Control className="mb-4" type="password"
                                 placeholder="Enter your password"/>
                    <div>
                        <Button variant="dark" type="submit">Login</Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}