import React, {useState} from "react";

import Toast from "react-bootstrap/Toast";

export function AutoCloseToast() {

    const [show, setShow] = useState(true);

    return (<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide >
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
    </Toast>)

}