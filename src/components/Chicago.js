import aboutImg1 from "../images/Mario and Adrian A.jpg";
import aboutImg2 from "../images/Mario and Adrian b.jpg";

function Chicago() {
    return (
        <div className="about-section">
            <section>
                <h3>Little Lemon</h3>
                <span>Chicago</span>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </section>
            <section>
                <img src={aboutImg1} alt="about-one" width="400" />
                <img src={aboutImg2} alt="about-one" width="400" />
            </section>
        </div>
    );
}

export default Chicago;