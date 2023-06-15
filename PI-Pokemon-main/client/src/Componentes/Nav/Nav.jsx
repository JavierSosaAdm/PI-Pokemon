import React from 'react';
import { Link } from 'react-router-dom'; 
import style from './Nav.module.style';
import SearchBar from './SearchBar/SearchBar';

const Nav = () => {

    return (
        <div>
            <Link to='/home'><h2>HOME</h2></Link>
            <SearchBar/>
            <Link to='/create'><h2>Poke-Create</h2></Link>
        </div>
    )
};

export default Nav;