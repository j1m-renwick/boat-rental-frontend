import React, {useState, useEffect} from "react";
import {observable} from "./Observe";

// var thing;
//
// class MyComponent extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {messages: ""};
//     }
//     componentDidMount() {
//         thing = observable
//             .subscribe(messages => this.setState({messages: messages}));
//     }
//     componentWillUnmount() {
//         thing.unsubscribe();
//     }
//     render() {
//         return (
//             <div>
//                 {/*Hi There*/}
//                 <ul>
//                     <li>{this.state.messages}</li>
//                 </ul>
//             </div>
//         );
//     }
// }


function MyComponent() {

    // useState returns the messages value and the function hook to be used to set it
    const [messages, setMessages] = useState("starting...");

    useEffect(() => {
        var thing = observable
            .subscribe(message => setMessages(message));

        // returned function will be called when the component unmounts
        return () => thing.unsubscribe();

        // an input of empty array means useEffect will only be called once
    }, []);

    return <div>
        <ul>
            <li>{messages}</li>
        </ul>
    </div>

}

export default MyComponent