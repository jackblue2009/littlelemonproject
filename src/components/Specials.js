import greekSalad from "../images/greek salad.jpg";
import chickenBiryani from "../images/chicken-hyderabadi-biryani.jpg";
import lemonDessert from "../images/lemon dessert.jpg";

import Swal from 'sweetalert2';

function Specials() {
    const items = [
        {
            id: 1,
            title: "Greek Salad",
            price: "10.99",
            image: greekSalad,
            imgalt: "greek-salad",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            foot: "Order Now"
        },
        {
            id: 2,
            title: "Chicken Biryani",
            price: "14.99",
            image: chickenBiryani,
            imgalt: "chicken-biryani",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            foot: "Order Now"
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: "21.59",
            image: lemonDessert,
            imgalt: "lemon-dessert",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            foot: "Order Now"
        }
    ];

    const handleOrder = (id) => {
        console.log(id, " is clicked.");
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Order It!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Completed!",
                text: "Your order has been submitted.",
                icon: "success"
              });
            }
          });
    };

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
                            <button onClick={() => handleOrder(item.id)}>{ item.foot }</button>
                        </div>
                    )
                }) }
            </div>
        </div>
    );
}

export default Specials;