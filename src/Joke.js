function Joke(props){
    return(
        <div className="joke">
            <p><span>Setup:</span> {props.setup}</p>
            <p><span>Punchline:</span> {props.punchline}</p>
        </div>
    )
}

export default Joke