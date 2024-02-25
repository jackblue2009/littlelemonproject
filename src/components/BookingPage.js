import { useState } from "react";

function BookingPage(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numGuests, setNumGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    return (
        <div className="booking-page">
            <h2>Book A Table</h2>
            <form onSubmit={handleSubmit}>
                <label for='res-date'>Choose Date</label>
                <input
                    type='date'
                    id="res-date"
                    onChange={(e) => handleChange(e.target.value)}
                />
                <label for='res-time'>Choose Time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value='default'>Choose a Time</option>
                    { props.availableTimes.availableTimes.map((item) => {
                        return (
                            <option key={item} value={item}>{item}</option>
                        );
                    }) }
                </select>
                <label for='guests'>Number Of Guests</label>
                <input
                    type='number'
                    placeholder='1'
                    min='1' max='10'
                    value={numGuests}
                    id='guests'
                    onChange={(e) => setNumGuests(e.target.value)}
                />
                <label for='occasion'>Occasions</label>
                <select
                    id='occation'
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value='default'>Choose an Occasion</option>
                    <option value='birthday'>Birthday</option>
                    <option value='anniversary'>Anniversary</option>
                </select>
                <input type='submit' value='Make Your Reservation' />
            </form>
        </div>
    );
}

export default BookingPage;