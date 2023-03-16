import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/fontawesome-free-solid"

function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
return(
        <section className="card">
            <div className="card-container">
                <div className="card-image">
                    <img src={`./${props.coverImg}`}/>
                    {badgeText && <p className="status">{badgeText}</p>}
                </div>
                <div className="card-text">
                    <p><FontAwesomeIcon icon={faStar} className="star"/> {props.stats.rating}<span className="gray">({props.stats.reviewCount}) {props.location}</span></p>
                    <p>{props.title}</p>
                    <p><span className="bold">From ${props.price}</span> / person</p>
                </div>
            </div>
        </section>
    )
}

export default Card