import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {Dropper} from "./Dropper";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {harbourList, junkTypeList} from "./DropperOptions";

export default function SearchBox() {

    // TODO use a proper parsing library like moment.js
    function parseDate(date, format, locale) {
        var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][date.getMonth()];
        return date.getDate() + ' ' + month + ' ' + date.getFullYear();
    }

    return (
        <div className="header">
            <Form>
                <h5 style={{"color": "#E3FDFF", "fontFamily": "Impact, Charcoal, sans-serif"}}>PICK YOUR TRIP</h5>
                <Row>
                    <InputGroup className="mb-3">
                        <Col>
                            <DayPickerInput style={{"display": "block"}} formatDate={parseDate} placeholder="Date..."
                                            component={props => <FormControl {...props}/>}/>
                        </Col>
                        <Col>
                            <Dropper placeholder="Harbour..." optionsList={harbourList}/>
                        </Col>
                        <Col>
                            <Dropper placeholder="Trip Type..." optionsList={junkTypeList}/>
                        </Col>
                    </InputGroup>
                </Row>
            </Form>
        </div>

    )
}