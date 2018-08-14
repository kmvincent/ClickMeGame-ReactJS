import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

    <div className="column card is-one-fifth">
        <figure className="image is-square" dataid={props.id} onClick={() => props.randomRender(props.id)}>
            <img src={props.image} alt={props.name}/>
        </figure>
    </div>

)

export default CharacterCard;