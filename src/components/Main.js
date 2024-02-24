import headlineImg from '../images/restauranfood.jpg'

import Specials from './Specials';
import Testimony from './Testimony';

function Main() {
    return (
        <main>
            <div className="headline">
                <div className="row">
                    <section>
                        <h2>Little Lemon</h2>
                        <sub>Chicago</sub>
                        <p>Come visit our nice new restaurant by reserving your favorite table with the click of a button below.</p>
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
            <Testimony />
        </main>
    );
}

export default Main;