import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Componentes/Cards/Cards';
import Pagination from '../../Componentes/Pagination/Pagination';
import Filters from '../../Componentes/Filters/Filters';
import { React, useEffect, useState} from 'react';
import { getTypes, getAllPokemon, getPokeName} from '../../Redux/Actions';
import queryString from 'query-string'
import style from './home.module.css'; 


const Home = () => {
    const dispatch = useDispatch();
    const { pokemon, types } = useSelector(state => state);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ orderBy, setOrderBy ] = useState('name');
    const [ sortBy, setSortBy ] = useState('ASC');
    const [ created, SetCreated ] = useState('all');
    const [ type, SetType ] = useState('all');
    console.log('pokemon', pokemon);

    let parsed = queryString.parse(window.location.search);
    let name = parsed.name; 
    let page = 1;

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);


    useEffect(() => {
        dispatch(getAllPokemon(currentPage));
    }, [dispatch]);
    

    

    return (
        <div className={style.filters} >
            <Filters className={style.filterItem}
                orderBy={orderBy}
                onOrderByChange={(newOrderBy) => setOrderBy(newOrderBy)}
                sortBy={sortBy}
                onSortByChange={(newSortBy) => setSortBy(newSortBy)}
                created={created}
                onCreatedChange={(newCreated) => SetCreated(newCreated)}
                types={types}
                type={type}
                onTypeChange={(newType) => SetType(newType)}
                />

                <Cards pokemon={pokemon}/>

                <Pagination
                goToPrevPage={() => setCurrentPage(currentPage -1)}
                goToNextPage={() => setCurrentPage(currentPage +1)}
                goToPage={() => setCurrentPage(page)}
                currentPage={currentPage}
                lastPage={pokemon?.totalPages}
                />
        </div>
    )
};

export default Home;