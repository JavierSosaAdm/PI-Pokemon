import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getPokeId } from '../../Redux/Actions';
import axios from 'axios';
import style from './detail.module.css'; 

const Detail = () => {

    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();
    const ids = useSelector(state => state);
    console.log(ids);
    // debugger;
    const [ pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [shy, setShy] = useState(false);
    
    const handleClic = () => {
        history.goBack();
    };

    useEffect(() => {
        dispatch(getPokeId(id))
    }, [dispatch])
        
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
            {ids.ids ? (
                <>
                
                <h2 className={style.name}>{ids.ids.name}</h2>
                <img className={style.image} src={shy ? ids.ids.backImage : ids.ids.image} alt="pokeImg"/>
                <p>Life: {ids.ids.life}</p>
                <p>Attack: {ids.ids.attack}</p>
                <p>Defense: {ids.ids.defense}</p>
                <p>Speed: {ids.ids.speed}</p>
                <p>Height: {ids.ids.height}</p>
                <p>Weight: {ids.ids.weight}</p>
                
                </>
            ) : (
                <h1>Not Found...</h1>
                )
            }

            {ids.ids && <button
                onClick={()=> {setShy(!shy)}}>
                    {shy ? 'Shy mode: ON' : 'Shy mode: OFF'}
                    </button>}

            <button className={style.button} onClick={handleClic}>
                BACK
            </button>

        </div>
    )
};

export default Detail;
                    






