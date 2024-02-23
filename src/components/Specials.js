import greekSalad from "../images/greek salad.jpg";
import chickenBiryani from "../images/chicken-hyderabadi-biryani.jpg";
import lemonDessert from "../images/lemon dessert.jpg";

function Specials() {
    const items = [
        {
            title: "Greek Salad",
            price: "10.99",
            image: greekSalad,
            imgalt: "greek-salad",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            foot: "Order For Delivery"
        },
        {
            title: "Chicken Biryani",
            price: "14.99",
            image: chickenBiryani,
            imgalt: "chicken-biryani",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            foot: "Order For Delivery"
        },
        {
            title: "Lemon Dessert",
            price: "21.59",
            image: lemonDessert,
            imgalt: "lemon-dessert",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            foot: "Order For Delivery"
        }
    ]
    return (
        <div className="top-specials">
            <h2>This Week's Specials!</h2>
            <div className="special-list">
                { items.map((item) => {
                    return (
                        <div className="special-item">
                            <img
                                src={item.image}
                                width='150'
                                alt={item.imgalt}
                            />
                            <h3>{ item.title }</h3>
                            <span className="price">${ item.price }</span>
                            <p>{ item.description }</p>
                            <br/>
                            <span><b>{ item.foot }</b></span>
                        </div>
                    )
                }) }
            </div>
        </div>
    );
}

export default Specials;