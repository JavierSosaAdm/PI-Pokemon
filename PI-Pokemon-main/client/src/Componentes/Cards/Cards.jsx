import style from './cards.module.css';
import Card from '../Card/Card';
// import { useSelector } from 'react-redux' 

const Cards = ({pokemon}) => {
    console.log('pokemon desde cards', pokemon);
    
    return (
        <>
            <div className={style.container}>
                {pokemon?.items.map((pokemon) => {
                    // console.log(pokemons.items);
                    return <Card 
                    key = {pokemon.id}
                    pokemon = {pokemon}
                    />
                })}
            </div>
        </>
    )

};
export default Cards;