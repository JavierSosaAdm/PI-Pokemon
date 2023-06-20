import React from 'react';
import { Link } from 'react-router-dom'; 
import SearchBar from '../SearchBar/SearchBar';
import styles from './nav.module.css';

const Nav = () => {

    return (
        <div className={styles.nav} >
            <Link to='/home'><h2>HOME</h2></Link>
                <SearchBar/>
            <button className={styles.button} >
                <Link to='/create'><h2>Poke-Create</h2></Link>
            </button>    
            
        </div>
    )
};

export default Nav;