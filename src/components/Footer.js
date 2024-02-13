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
            <table>
                <thead>
                    <tr>
                        { footLinks.map((item, index) => {
                            <th key={index}>{item.title}</th>
                        }) }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        { footLinks.map((item, index) => {
                            <td key={index}>
                                <ul>
                                    { item.list.map((listItem, listIndex) => {
                                        <li key={listIndex}>{listItem}</li>
                                    }) }
                                </ul>
                            </td>
                        }) }
                    </tr>
                </tbody>
            </table>
        </footer>
    );
}

export default Footer;