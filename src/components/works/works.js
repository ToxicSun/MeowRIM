import "./works.css"
import OnePiture from "./images/Rectangle 13.png"
import TwoPicture from "./images/Rectangle 14.png"
import ThreePicture from './images/Rectangle 15.png'
import FourPicture from "./images/Rectangle 16.png"

function Works() {
    return(
        <div className="works__container">
            <div className="title">WORKS</div>
            <div className="images__container">
                <div>
                    <img className="image__works" src={OnePiture} alt="image1" />
                    <img className="image__works" src={ThreePicture} alt="image2" />
                </div>
                <div>
                    <img className="image__works" src={TwoPicture} alt="image3" />
                    <img className="image__works" src={FourPicture} alt="image4" />
                </div>
            </div>
        </div>
    )
}

export default Works;