import "./termsOfService.css"
import Human from "./icons/Standing Man.png"
import Anthro from "./icons/Fursona.png"
import Elf from "./icons/Elf.png"
import Gender from './icons/Vector 11.png'
import Children from "./icons/Child Safe Zone.png"
import PayPal from "./icons/PayPal.png"
import Picture from "./icons/Picture.png"
import Money from "./icons/Money.png"

function TermsOfService() {
    return(
        <div className="terms__container">
            <div className="title">TERMS OF SERVICE</div> {/* ЗАГОЛОВОК БЛОКА */}
            <div className="terms__items">
                <div className="line">
                    <div className="item__of__terms"> 
                        <div className="conteiner__item">
                            <img className="icon__terms" src={Human} alt="HUMAN" />
                            <div>HUMANS</div>
                        </div>
                    </div>
                    <div className="item__of__terms">
                        <div className="conteiner__item">
                            <img src={Anthro} alt="" className="icon__terms" />
                            <div>ANTHRO</div>
                        </div>
                    </div>
                    <div className="item__of__terms">
                        <div className="conteiner__item">
                            <div className="icon">18+</div>
                            <div className="sfw">NSFW</div>
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="item__of__terms"> 
                        <div className="conteiner__item">
                            <img className="icon__terms" src={Elf} alt="HUMAN" />
                            <div>ANY RACE</div>
                        </div>
                    </div>
                    <div className="item__of__terms">
                        <div className="conteiner__item">
                            <img src={Gender} alt="" className="icon__terms" />
                            <div>ANY GENDER</div>
                        </div>
                    </div>
                    <div className="item__of__terms">
                        <div className="conteiner__item">
                            <div className="icon">18-</div>
                            <div className="sfw">SFW</div>
                        </div>
                    </div>
                </div>
                <div className="last__line">
                    <div className="last">
                        <div className="conteiner__item">
                            <img className="icon__terms" src={Children} alt="" />
                            <div className="children__item">I DON'T DRAW ANY CHILDREN</div>
                        </div>
                    </div>
                </div>
            </div>{/* ТЕРМИНЫ МИНИ ДИВЫ*/}
            <div className="terms__info__container">{/* КОНТЕИНЕР С ПЕЙПАЛ И ТЕКСТОМ*/}
                <div className="terms"> {/*ИКОНКИ С ИНФОЙ*/}
                    <div className="terms__item">
                        <img className="icon__cash" src={PayPal} alt="" />
                        <div className="terms__text__item">
                            WORK WITH PAYPAL (USD) FULL PREPAYMENT I WILL INVOICE YOU
                        </div>
                    </div>
                    <div className="terms__item">
                        <img className="icon__cash" src={Picture} alt="" />
                        <div className="terms__text__item">
                            YOUR ARTWORK WILL BE READY IN 1-2 MONTH
                        </div>
                    </div>
                    <div className="terms__item">
                        <img className="icon__cash" src={Money} alt="" />
                        <div className="terms__text__item">
                            A REFUND IS ONLY POSSIBLE IF I CAN'T FINISH YOUR WORK BECAUSE OF MY OWN FAULT
                        </div>
                    </div>
                </div>
                <div className="text__info__terms">
                *  CORRECTIONS AND SMALL CHANGES(THE DETAILS OF CHARACTER, CLOTHES, HAIRSTYLE, FACIAL EXPRESSION) COLOR PART HAVE 3 FREE EDITS BUT IF I MADE A MISTAKE SOMEWHERE, I WILL FIX IT FOR FREE
                </div>
            </div>
        </div>
    )
}

export default TermsOfService;