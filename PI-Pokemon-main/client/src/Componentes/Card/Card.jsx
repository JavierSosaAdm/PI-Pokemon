import { Link } from 'react-router-dom';
import style from './card.module.css'; 

const Card = ({pokemon}) => {
    return (
        <div className={style.card} >
            <Link to={'/detail'}>
                <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
            </Link>
            <img className={style.cardImg} src={pokemon.image} alt="" />
            {pokemon && pokemon.types.map(type => 
                <span className={style.name} >
                    {type.name}
                </span>)}
        </div>
    )
};
export default Card;

