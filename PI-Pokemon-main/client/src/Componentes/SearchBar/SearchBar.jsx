import { React, useState, }  from 'react';
import { useHistory } from 'react-router-dom';
// import { getPokeName } from '../../Redux/Actions';
import style from './searchBar.module.css'; 
// import { useDispatch } from 'react-redux';

const SearchBar = () => {

    // const dispatch = useDispatch()
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
            <input className={style.input} type="text" onChange={handleChange}/>
            <button className={style.searchButton} onClick={() => {
                if (pokemonName?.length > 0) {
                    onSearch();
                }
            }}>SEARCH</button>

        </div>
    );
};

export default SearchBar;



// const dispatch = useDispatch()
// const [name, setName] = useState("")

// function handleInputChange(e){
    //     e.preventDefault()
    //     setName(e.target.value)
    // }
    
    // function handleSubmit(e){
        //     e.preventDefault()
        //     dispatch(getPokeName(name))
        // }
        // useEffect(() => {
            //     dispatch(getPokeName(name))
            // }, [dispatch])
            // return (
//     <div>
//         <input 
//         type= 'text' 
//         placeholder="Buscar un pokemon" 
//         onChange={(e) => handleInputChange(e)} />

//         <button 
//         type="submit" 
//         onClick={(e)=>handleSubmit(e)}>Search</button>
//     </div>
// )
// import React from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// // import style from "./SearchBar.module.css";

// export default function SearchBar() {
//    const [pokemonName, setPokemonName] = useState("");

//    const history = useHistory();

//    const handleChange = (event) => {
//       setPokemonName(event.target.value);
//    };

//    const onSearch = () => {
//       history.push(`/home?name=${pokemonName}`);
//    };

//    return (
//       <div >
//          <input
//             type="search"
//             // className={style.searchInput}
//             onChange={handleChange}
//          />
//          <button
            
//             onClick={() => {
//                if (pokemonName?.length > 0) {
//                   onSearch();
//                }
//             }}
//          >
//             ← Search
//          </button>
//       </div>
//    );
// }

// import React from "react";
// import { useState } from "react";
// import {useDispatch} from "react-redux"
// import { getPokeName } from '../../Redux/Actions';

// export default function SearchBar(){
//     const dispatch = useDispatch()
//     const [name, setName] = useState("")

//     function handleInputChange(e){
//         e.preventDefault()
//         setName(e.target.value)
//     }
    
//     function handleSubmit(e){
//         e.preventDefault()
//         dispatch(getPokeName(name))
//     }

//     return (
//         <div>
//             <input
//             type = "text"
//             placeholder = "Name..."
//             onChange = {(e)=>handleInputChange(e)}
//             />
//             <button type="submit" onClick={(e)=>handleSubmit(e)}>Search</button>
//         </div>
//     )
// }