import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/fontawesome-free-solid"

function Contact({img, name, phone, email}){
    return(
        <div className="contact-card">
            <img src={img} className='cat-img'/>
            <h3>{name}</h3>
            <div className="info-group">
                <p><FontAwesomeIcon icon={faPhone}/> {phone}</p>
            </div>
            <div className="info-group">
                <p><FontAwesomeIcon icon={faEnvelope}/>{email}</p>
                
            </div>
        </div>
    )
}

export default Contact