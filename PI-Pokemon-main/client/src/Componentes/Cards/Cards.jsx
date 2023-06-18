// import style from './cards.module.css';
import Card from '../Card/Card';
import { useSelector } from 'react-redux' 

const Cards = () => {

    const {pokemons} = useSelector(state => state) //permite acceder al estado global y extraer datos específicos que son necesarios para el componente.

    return (
        <>
            <div>
                {pokemons?.item.map(pokemon => {
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