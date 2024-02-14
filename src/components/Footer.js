import img from '../images/restaurant.jpg'

function Footer() {
    const footLinks = [
        {
            title: "Doormat Navigation",
            list: [
                "Home",
                "About",
                "Menu",
                "Reservations",
                "Order Online",
                "Login",
            ],
        },
        {
            title: "Contact",
            list: [
                "Email: littlelemon@gamil.com",
                "Phone: +973 17334088",
            ],
        },
        {
            title: "Social Media Links",
            list: [
                "Twitter",
                "Facebook",
                "Instagram",
            ],
        }
    ];
    return (
        <footer>
            <img src={img}
                 alt='restaurant-indoor'
                 width='400'
            />
            {footLinks.map((item, index) => {
                return (
                    <div className='footer-section' key={index}>
                        <h3>{item.title}</h3>
                        <ul>
                            {item.list.map((listItem, listIndex) => {
                                return (
                                    <li>{listItem}</li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </footer>
    );
}

export default Footer;