import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import LandingPage from './pages/LandingPage';
import * as serviceWorker from './serviceWorker';
import ReservationBookingPage from "./pages/ReservationBookingPage";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/reserve" component={ReservationBookingPage}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
