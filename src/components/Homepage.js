import headlineImg from '../images/restauranfood.jpg'

import Specials from './Specials';
import CustomerSay from './CustomerSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import { Link } from 'react-router-dom';

function Homepage() {
    // const openPopup = () => {
    //     const popupWindow = window.open('/booking', 'popupWndow', 'width=800,height=600');
    //     if (popupWindow) {
    //         popupWindow.focus();
    //     }
    // }
    return (
        <main>
            <div className="headline">
                <div className="row">
                    <section>
                        <h2>Little Lemon</h2>
                        <sub>Chicago</sub>
                        <p>Come visit our nice new restaurant by reserving your favorite table with the click of a button below.</p>
                        <br/>
                        <Link to='/booking'>Book A Table</Link>
                        {/* <button onClick={openPopup}>Book A Table</button> */}
                        {/* <a href='/booking'>Book A Table</a> */}
                    </section>
                    <section>
                        <img
                            src={headlineImg}
                            alt='headline-image-showing-restaurant-food'
                            width='200'
                            height='200'
                        />
                    </section>
                </div>
            </div>
            <Specials />
            <CustomerSay />
            <Chicago />
        </main>
    );
}

export default Homepage;