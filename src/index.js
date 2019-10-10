import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage';
import * as serviceWorker from './serviceWorker';
import ReservationBookingPage from "./pages/ReservationBookingPage";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./NavigationBar";
import Logo from "./Logo";
import Container from "react-bootstrap/Container";

const routing = (
    <Router>
        <NavigationBar/>
        <div style={{"height": "70px"}}/>
        <Container>
            <Logo/>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/reserve" component={ReservationBookingPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        </Container>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
