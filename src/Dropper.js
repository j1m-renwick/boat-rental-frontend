import React, {useState} from "react";
import FormControl from "react-bootstrap/es/FormControl";
import Dropdown from "react-bootstrap/Dropdown";

export function Dropper(props) {

    const DEFAULT_EVENT_KEY = "NONE_SELECTED";
    let [textValue, setTextValue] = useState(null);

    const placeholder = props.placeholder;
    const streamSubject = props.streamSubject;

    function handleOptionClick(eventKey, e) {
        let text = eventKey !== DEFAULT_EVENT_KEY ? e.target.text : null;

        if (textValue !== text) {
            setTextValue(text);
            if (streamSubject !== undefined) {
                let streamValue = eventKey !== DEFAULT_EVENT_KEY ? eventKey : null;
                streamSubject.next(streamValue);
            }
        }

    }

    return (
        <Dropdown>
            <Dropdown.Toggle
                as={props => <FormControl id={props.id} placeholder={placeholder} {...props} value={textValue}/>}
                autoComplete="off"/>
            <Dropdown.Menu>
                <Dropdown.Item key={DEFAULT_EVENT_KEY} eventKey={DEFAULT_EVENT_KEY}
                               onSelect={handleOptionClick}>All</Dropdown.Item>
                <Dropdown.Divider/>
                {props.optionsList.map(((val, key) => <Dropdown.Item key={key} eventKey={val[0]}
                                                                     onSelect={handleOptionClick}>{val[1]}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
