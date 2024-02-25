import { useState } from "react";

function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [numGuests, setNumGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ];
    return (
        <div className="booking-page">
            <h2>Book A Table</h2>
            <form>
                <label for='res-date'>Choose Date</label>
                <input
                    type='date'
                    id="res-date"
                    onChange={(e) => setDate(e.target.value)}
                />
                <label for='res-time'>Choose Time</label>
                <select
                    id="res-time"
                    value='default'
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value='default'>Choose a Time</option>
                    { availableTimes.map((item) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    }) }
                </select>
                <label for='guests'>Number Of Guests</label>
                <input
                    type='number'
                    placeholder='1'
                    min='1' max='10'
                    id='guests'
                    onChange={(e) => setNumGuests(e.target.value)}
                />
                <label for='occasion'>Occasions</label>
                <select
                    id='occation'
                    value='default'
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