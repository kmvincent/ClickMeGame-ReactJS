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
            {props.message}
        </h2>
        </div>
    </div>
</section>
</div>
)

export default Hero;