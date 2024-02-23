import headlineImg from '../images/restauranfood.jpg'

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
        </main>
    );
}

export default Main;