// import style from 'card.module.css'; 
import { Link } from 'react-router-dom';

const Card = ({pokemon}) => {
    return (
        <div>
            <Link to={'/detail'}>
                <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
            </Link>
            <img src={pokemon.image} alt="" />
            {pokemon && pokemon.types.map(type => 
                <span>
                    {type.name}
                </span>)}
        </div>
    )
};
export default Card;

