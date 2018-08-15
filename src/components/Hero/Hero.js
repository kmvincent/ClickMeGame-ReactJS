import React from "react";

const styles = {
    band: {
        marginBottom: 25,
    },
}

const Hero = props => (
<div>
<section className="hero is-medium is-dark is-bold" style={styles.band}>
    <div className="hero-body">
        <div className="container">
        <h1 className="title">
            One Night Werewolf Clicky Game
        </h1>
        <h2 className="subtitle">
            Click on an image to earn points, but don't click on any more than once!    
        </h2>
        <h2> Score: {props.score} | Top Score: {props.topScore}</h2>
        <h2>{props.message}</h2> 
        </div>
    </div>
</section>
</div>
)

export default Hero;