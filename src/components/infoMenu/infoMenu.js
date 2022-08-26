import "./infoMenu.css"
import "./Particles"
import Tablet from"./Tablet.png"
import ParticlesComponent from "./Particles"

function InfoMenu() {
    return(
        <div className="info__block">
            <div className="text__infoMenu">
            <div className="text__info__block">
                <div className="first__block">TURN</div>
                <div className="second__block">imagination into REALITY</div>
            </div>
            <button className="button">ORDER INFO</button>
            </div>
            <div className="image__tablet">
                <img src={Tablet} alt="tablet" className="img"/>
            </div>
            <ParticlesComponent/>
        </div>
    )
}

export default InfoMenu;