function BookingPage() {
    return (
        <div className="booking-page">
            <h2>Book A Table</h2>
            <form>
                <label for='res-date'>Choose Date</label>
                <input type='date' id="res-date" />
                <label for='res-time'>Choose Time</label>
                <select id="res-time">
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label for='guests'>Number Of Guests</label>
                <input 
                    type='number' 
                    placeholder='1' 
                    min='1' max='10' 
                    id='guests'
                />
                <label for='occasion'>Occasions</label>
                <select id='occation'>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type='submit' value='Make Your Reservation' />
            </form>
        </div>
    );
}

export default BookingPage;