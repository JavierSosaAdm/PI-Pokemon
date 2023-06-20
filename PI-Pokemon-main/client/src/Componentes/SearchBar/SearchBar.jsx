import { React, useState}  from 'react';
import { useHistory } from 'react-router-dom';
import style from './searchBar.module.css'; 

const SearchBar = () => {

    const [ pokemonName, setPokemonName ] = useState('');
    const history = useHistory();

    const handleChange = (event) => {
        setPokemonName(event.target.value);
    };

    const onSearch = () => {
        history.push(`/home?name=${pokemonName}`);
    };

    return (
        <div className={style.searchBar} >
            <input type="text" onChange={handleChange}/>
            <button className={style.searchButton} onClick={() => {
                if (pokemonName?.length > 0) {
                    onSearch();
                }
            }}>SEARCH</button>

        </div>
    );
};

export default SearchBar;