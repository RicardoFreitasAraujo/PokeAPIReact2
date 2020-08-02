import React from 'react';
import './styles.css';
import pokemonTypes from '../../helpers/pokemonTypes';

function Card({ pokemon })
{
    return(
    <div className="Card">
        <div className="Card__img">
            <img src={pokemon.sprites.front_default} alt=""/>
        </div>
        <div className="Card__name">
            {pokemon.name}
        </div> 
        <div className="Card__types">
            {pokemon.types.map(type => {
                return(
                    <div className="Card__type" style={ { backgroundColor : pokemonTypes[type.type.name]  }  } key={type.type.name}>
                         {type.type.name}   
                    </div>
                )
            })}
        </div>      
        <div className="Card__info">
            <div className="Card__data Card__data-weight">
                <p className="title">Weight</p>
                { pokemon.weight }
            </div>
            <div className="Card__data Card__data-height">
                <p className="title">Height</p>
                { pokemon.height }
            </div>
            <div className="Card__data Card__data-ability">
                <p className="title">Ability</p>
                { pokemon.abilities[0].ability.name }
            </div>
        </div>  
    </div>);
}

export default Card;

