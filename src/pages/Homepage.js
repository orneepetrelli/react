import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import '../styles/home.css'
const HomePage = (props) => {
    const settings = {
        arraws: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true,
    };
    return (
        <div className="home">
            <Slider {...settings}>
                <img src="/images/img01.jpg" alt="img1" />
                <img src="/images/img02.jpg" alt="img2" />
                <img src="/images/img03.jpg" alt="img3" />
                <img src="/images/img04.jpg" alt="img4" />
                <img src="/images/img05.jpg" alt="img5" />
            </Slider>
        </div>
    )
}

export default HomePage;