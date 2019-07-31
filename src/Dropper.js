import React, {useState} from "react";
import FormControl from "react-bootstrap/es/FormControl";
import Dropdown from "react-bootstrap/Dropdown";

export function Dropper(props) {

    let [value, setValue] = useState("");

    const placeholder = props.placeholder;

    function handleOptionClick(eventKey, e) {
        setValue(e.target.text)
    }


    return (
        <Dropdown >
            <Dropdown.Toggle as={props => <FormControl onChange={() => null} placeholder={placeholder} {...props} value={value}/>} autoComplete="off" id="dropdown-custom-components"/>

            <Dropdown.Menu>
                {props.optionsList.map(((val, key) => {
                    console.log(val);
                    return (<Dropdown.Item key={key} eventKey={key} onSelect={handleOptionClick}>{val}</Dropdown.Item>)
                }))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
