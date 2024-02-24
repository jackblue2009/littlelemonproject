import userImg from "../images/profile.png";

function Testimony() {
    const testimonies = [
        {
            title: "Rating",
            image: userImg,
            user: "Shekh Merraj",
            review: "It is a great restaurant"
        }
    ]
    return (
        <div className="testimony">
            <h3>Testimonies</h3>
            <div className="testimony-list">
                <div className="test-item">
                    <h4>Rating</h4>
                    <div className="row">
                        <img src={userImg} alt="user-image" width="50" />
                        <span><b>User</b></span>
                    </div>
                    <p>User written review</p>
                </div>
            </div>
        </div>
    );
}

export default Testimony;