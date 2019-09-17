import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import 'react-day-picker/lib/style.css';
import {Dropper} from "./Dropper";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {harbourList, tripTypeList} from "./DropperData";
import {subjectMap} from "./Streams";
import DatePicker from "./DatePicker";

export default function SearchBox() {

    return (
        <div className="header">
            <Form>
                <h5 className="header-title">PLAN YOUR TRIP</h5>
                <Row>
                    <InputGroup className="mb-3">
                        <Col>
                            <DatePicker id="datePickerSearchBox" streamSubject={subjectMap["date"]}/>
                        </Col>
                        <Col>
                            <Dropper id="HarbourSearchBox" placeholder="Harbour..." optionsList={harbourList} streamSubject={subjectMap["harbour"]}/>
                        </Col>
                        <Col>
                            <Dropper id="TripTypeSearchBox" placeholder="Trip Type..." optionsList={tripTypeList} streamSubject={subjectMap["tripType"]}/>
                        </Col>
                    </InputGroup>
                </Row>
            </Form>
        </div>

    )
}