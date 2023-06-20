import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios';
import style from './detail.module.css'; 

const Detail = () => {

    const history = useHistory();
    const id = useParams();

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    const [shy, setShy] = useState(false);

    const handleClic = () => {
        history.goBack();
    };

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:3001/pokemons/${id}`;

        axios(url)
        .then((response) => {
            setPokemon(response.data);
            setLoading(false);  
        }).catch((error) => {
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>
            <h3>Loading...</h3>
        </div>   
    }

    return (
        <div className={style.detail} >
            {pokemon ? (
                <>
                
                <h2>{pokemon.name}</h2>
                <img className={style.image} src={shy ? pokemon.backImage : pokemon.image} alt="pokeImg"/>
                <p>Life: {pokemon.life}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Speed: {pokemon.speed}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                
                </>
            ) : (
                <h1>Not Found...</h1>
            )
            }

            {pokemon && <button
                onClick={()=> {setShy(!shy)}}>
                    {shy ? 'Shy mode: ON' : 'Shy mode: OFF'}
                    </button>}

            <button onClick={handleClic}>
                BACK
            </button>

        </div>
    )
};

export default Detail;