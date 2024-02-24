import userImg from "../images/profile.png";

function Testimony() {
    const testimonies = [
        {
            title: "Rating",
            image: userImg,
            user: "Shekh Merraj",
            review: "It is a great restaurant."
        },
        {
            title: "Rating",
            image: userImg,
            user: "Shawn Michaels",
            review: "Love it!"
        },
        {
            title: "Rating",
            image: userImg,
            user: "Shahruhkhan",
            review: "Exceptional service!"
        }
    ]
    return (
        <div className="testimony">
            <h3>Testimonies</h3>
            <div className="testimony-list">
                { testimonies.map((item) => {
                    return (
                        <div className="test-item">
                            <h4>{item.title}</h4>
                            <div className="row">
                                <img src={item.image} alt="user-image" width="50" />
                                <span><b>{item.user}</b></span>
                            </div>
                            <p>{item.review}</p>
                        </div>
                    )
                }) }
            </div>
        </div>
    );
}

export default Testimony;