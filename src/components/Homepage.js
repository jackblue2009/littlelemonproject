import headlineImg from '../images/restauranfood.jpg'

import Specials from './Specials';
import CustomerSay from './CustomerSay';
import Chicago from './Chicago';
function Homepage() {
    return (
        <main>
            <div className="headline">
                <div className="row">
                    <section>
                        <h2>Little Lemon</h2>
                        <sub>Chicago</sub>
                        <p>Come visit our nice new restaurant by reserving your favorite table with the click of a button below.</p>
                        <br/>
                        <button>Book A Table</button>
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