import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Componentes/Cards/Cards';
import Pagination from '../../Componentes/Pagination/Pagination';
import Filters from '../../Componentes/Filters/Filters';
import { React, useEffect, useState} from 'react';
import { GetPokemon, GetTypes } from '../../Redux/Actions';
import queryString from 'query-string'
// import style from './Home.module.css'; 


const Home = () => {
    const dispatch = useDispatch();
    const { pokemons, types } = useSelector(state => state);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ orderBy, setOrderBy ] = useState('name');
    const [ sortBy, setSortBy ] = useState('ASC');
    const [ created, SetCreated ] = useState('all');
    const [ type, SetType ] = useState('all');

    let parsed = queryString.parse(window.location.search);
    let name = parsed.name; 
    let page = 0;

    useEffect(() => {
        dispatch(GetTypes());
    }, []);



    useEffect(() => {
        dispatch(GetPokemon(name ?? '', currentPage, orderBy, sortBy, created, type));
    }, [dispatch, name, currentPage, orderBy, sortBy, created, type]);

    return (
        <div>
            <Filters 
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

                <Cards pokemon={pokemons?.items}/>

                <Pagination
                goToPrevPage={() => setCurrentPage(currentPage -1)}
                goToNextPage={() => setCurrentPage(currentPage +1)}
                goToPage={() => setCurrentPage(page)}
                currentPage={currentPage}
                lastPage={pokemons?.totalPages}
                />
        </div>
    )
};

export default Home;