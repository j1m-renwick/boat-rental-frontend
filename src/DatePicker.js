import FormControl from "react-bootstrap/es/FormControl";
import DayPickerInput from "react-day-picker/DayPickerInput";
import React from "react";
import moment from "moment";


export default function DatePicker(props) {

    function handleDateSelect(day, modifiers, dayPickerInput) {
        props.streamSubject.next(moment(day).format("YYYY-MM-DD"));
    }

    return (
        <DayPickerInput id={props.id} style={{"display": "block"}} onDayChange={handleDateSelect} formatDate={(date, format, locale) => moment(date).format("DD MMMM YYYY")}
                        placeholder="Date..." dayPickerProps={{disabledDays: {before: new Date()}, fromMonth: new Date()}} component={props => <FormControl {...props}/>}/>
    )
}