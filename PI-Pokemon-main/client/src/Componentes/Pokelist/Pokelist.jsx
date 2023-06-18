import React from 'react';

const Pokelist = ({pokemon}) => {

    return (
        <div>
            {pokemon.map(poke => (
                <div key = {poke}>{poke.name}</div>
            ))}
        </div>
    )
};

export default Pokelist;