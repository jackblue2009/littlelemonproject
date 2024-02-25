import React from "react";
import BookingPage from "./BookingPage";

function Booking(props) {
    return (
        <BookingPage availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.submitForm} />
    );
}

export default Booking;