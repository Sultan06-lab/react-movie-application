import { useEffect, useState } from 'react';
import './Search.css'
import SearchConfig from './SearchConfig';
import PaginationConfig from "../Pagination/PaginationConfig";
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {

    let [text, setText] = useState('');
    let [movies, setMovies] = useState('');
    let [page, SetPage] = useState();
    let [numberOfPages, setNumberOfPages] = useState();


    const onHandle = (text) => {
        if(!text){
            return;
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=${page}&include_adult=false`)
                .then(res => res.json())
                .then(res => {
                setMovies(res.results)
                setNumberOfPages(res.total_pages)
    });
    }

    useEffect(() => {
        onHandle(text);
        
    
    }, [page, text])
    
        console.log(movies);

    return (
        <div>
            <form action="">
                <div className='Search' >
                    <div className='Search-input'>
                        <input className='Seacrh-text' type="text" placeholder='Seacrh...' value={text} onChange={(e) => {setText(e.target.value)}} />
                        {/* <button><SearchIcon/></button> */}
                        <SearchIcon className='icon'/>
                    </div>
                </div>
            </form>
            <div className='film'>
            {movies.length > 0 && movies.map(movie => (
                console.log('k'),
                <SearchConfig key={movie.id} data={movie}/>
            ))}
            </div>
            <div className='search_pagination'>
            {
                text.length > 0 && <PaginationConfig SetPage={SetPage} numberOfPages={numberOfPages}/>
            }
            </div>
        </div>
    )
}

export default Search;