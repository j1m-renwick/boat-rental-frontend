import React, {useState} from "react";
import FormControl from "react-bootstrap/es/FormControl";
import Dropdown from "react-bootstrap/Dropdown";

export function Dropper(props) {

    let [value, setValue] = useState("");

    const placeholder = props.placeholder;

    function handleOptionClick(eventKey, e) {
        let text = e.target.text;
        setValue(text);
        props.streamSubject.next(text);
    }

    return (
        <Dropdown>
            <Dropdown.Toggle
                as={props => <FormControl id={props.id} placeholder={placeholder} {...props} value={value}/>}
                autoComplete="off"/>
            <Dropdown.Menu>
                {props.optionsList.map(((val, key) => <Dropdown.Item key={key} eventKey={key}
                                                                     onSelect={handleOptionClick}>{val}</Dropdown.Item>))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
