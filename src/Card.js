import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/fontawesome-free-solid"

function Card(props){
    
return(
        <section className="card">
            <div className="card-container">
                <div className="card-image">
                    <img src={props.coverImg}/>
                    <p className="status">SOLD OUT</p>
                </div>
                <div className="card-text">
                    <p><FontAwesomeIcon icon={faStar} className="star"/> {props.rating}<span className="gray">({props.reviewCount}) {props.location}</span></p>
                    <p>{props.title}</p>
                    <p><span className="bold">From ${props.price}</span> / person</p>
                </div>
            </div>
          

            

        </section>
    )
}

export default Card