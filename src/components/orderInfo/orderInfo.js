import "./ordegInfo.css"
import ImageOne from "./Rectangle 21.png"
import ImageTwo from "./Rectangle 22.png"
import ImageThree from "./Rectangle 23.png"
import firstBlock from "./fluent_video-background-effect-20-regular.png"
import secondBlock from "./ant-design_bulb-outlined.png"
import thirdBlock from "./dashicons_art.png"

function OrderInfo() {


    return(
        <div className="order__container">
            <div className="title">
            ORDER INFO
            </div>
            <div className="block">
                    <div className="left__block">
                        <div className="text__container black__text">
                            <div className="">
                                DEATAILED BACKGROUNDS, ARMOR\CLOTHES ARE DISSCUSED SEPARATELY (DEPENDING ON THE QUALITITY AND COMPLEXITY)
                            </div><br />
                            <div className="">
                                ADDITIONAL CHARACERS $210+ ADDITIONAL VERSIONS (CUM, +-LINGERIE, AND OTHER) $10+
                            </div>
                            <button className="btn">➝</button>
                        </div>
                    </div>
                <div className="slider__container">
                <div className="slider__item">
                    <div className="item" id="0">
                        <img className="vector" src={firstBlock} alt="1" />
                        <img className="image__slider" src={ImageOne} alt="one" />
                        <div className="slider__text">
                            <div className="">
                                CHARACTER WITHOUT BG
                            </div><br />
                            <div className="">
                                -SIMPLE BG FREE (TRANSPERENT, SOLID, GRADIENT, ABSTRACT)
                            </div>
                        </div>
                        <div className="price">
                                $220+
                            </div>
                    </div>
                    <div className="item" id="1">
                        <img className="vector second__vector" src={thirdBlock} alt="2" />
                        <img className="image__slider" src={ImageThree} alt="three" />
                        <div className="slider__text__fan">
                            FAN ART
                        </div>
                        <div className="price">
                            -10%
                        </div>
                    </div>
                    <div className="item" id="2">
                        <img className="vector" src={secondBlock} alt="3" />
                        <img className="image__slider" src={ImageTwo} alt="two" />
                        <div className="slider__text">
                            ARTISTIC FREEDOM COMMISSIONS -20%
                        </div>
                        <div className="price">
                            $220+
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="discr black__text">
                <div className="title__text ">ARTISTIC FREEDOM COMMISSION</div><br />
                <div className="">YOU CAN ORDER A PICTURE RELYING ON MY IMAGINATION. IN THIS CASE, YOU WILL GET A DISCOUNT 20%, BUT YOU WILL NOT BE ABLE TO CHOOSE POSE, BACKGROUND AND COMPOSITION OF THE PICTURE AND YOU WILL NOT BE ABLE TO GET STAGES OF WORK. IN OTHER RESPECTS, PROCEDURE DOES NOT DIFFER FROM STANDARD ORDERS
                                TO DO THIS, SEND ME A REF OF YOUR CHARACTER, BRIEF WISHES AND YOUR PAYPAL FOR INVOICE.</div>
            </div>
        </div>
    )
}

export default OrderInfo;