function Hero(){
    return(
        <section className="hero">
            <div className="image-gallery">
                <div className="images">
                    <img src={require("./images/hero-img1.jpg")} className="image1"/>
                    <img src={require("./images/hero-img2.jpg")}/>
                    <img src={require("./images/hero-img3.jpg")}/>
                    <img src={require("./images/hero-img4.jpg")}/>
                    <img src={require("./images/hero-img5.jpg")}/>
                    <img src={require("./images/hero-img6.jpg")}/>
                    <img src={require("./images/hero-img7.jpg")}/>
                    <img src={require("./images/hero-img8.jpg")}/>
                    <img src={require("./images/hero-img9.jpg")}/>
                    <img src={require("./images/hero-img3.jpg")}/>
                    <img src={require("./images/hero-img4.jpg")}/>
                    <img src={require("./images/hero-img6.jpg")}/>
                    <img src={require("./images/hero-img2.jpg")}/>
                    <img src={require("./images/hero-img1.jpg")}/>
                    <img src={require("./images/hero-img8.jpg")}/>
                </div>
            </div>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero