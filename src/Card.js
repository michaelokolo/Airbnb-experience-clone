import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/fontawesome-free-solid"

function Card(){
    return(
        <section className="card">
            <div className="card-container">
                <div className="card-image">
                    <img src={require("./images/card-img1.jpg")}/>
                    <p className="status">SOLD OUT</p>
                </div>
                <div className="card-text">
                    <p><FontAwesomeIcon icon={faStar} className="star"/> 5.0<span className="gray">(6)USA</span></p>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><span className="bold">From $136</span> / person</p>
                </div>
            </div>
        </section>
    )
}

export default Card