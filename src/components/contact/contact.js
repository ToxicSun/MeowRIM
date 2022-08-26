import "./contact.css"
import Twitter from "./icons/Vector.png"
import Mail from "./icons/VectorMail.png"

function Contact() {
    return(
        <div className="contact__container">
            <div className="title">CONTACT</div>
            <div className="warning">PLEASE, WRITE ME VIA E-MAIL: MEOWRIMART@GMAIL.COM 
                OR MY TWITTER TO DISCUSS DETAIL
            </div>
            <div className="message">
            <div className="message__template">MESSAGE TEMPLATE</div>
            <div className="message__items">
                <div className="list__message">
                    <ul>
                        <li>TITLE "COMMISION"</li>
                        <li>YOUR CHARACTER`S NAME</li>
                        <li>TYPE OF COMMISSION YOU ARE INTERESTED IN</li>
                        <li>CHARACTERS DESCRIPTION, PERSONALITY/MOOD</li>
                        <li>CHARACTER REFERENCE/REFERENCES</li>
                        <li>IDEAS AND WISHES</li>
                        <li>PAYPAL EMAIL</li>
                        <li>YOUR TWITTER LINK</li>
                    </ul>
                </div>
                <div className="links">
                    <div className="link__container">
                        <div className="link__items">
                            <img src={Twitter} alt="twitter" className="twitter__icon" />
                            <a href="https://twitter.com/MeowRim0" className="link">https://twitter.com/MeowRim0</a>
                        </div>
                     </div>
                    <div className="link__container">
                        <div className="link__items">
                            <img src={Mail} alt="mail" className="mail__icon" />
                            <a href="MEOWRIMART@GMAIL.COM" className="link">MEOWRIMART@GMAIL.COM</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;