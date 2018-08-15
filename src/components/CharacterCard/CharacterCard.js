import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

    <div className="column card is-one-fifth">
        <figure className="image is-square">
            <img dataid={props.id} src={props.image} alt={props.name} onClick={() => props.randomRender(props.id)}/>
        </figure>
    </div>

)

export default CharacterCard;