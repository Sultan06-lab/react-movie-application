import { useEffect, useState } from "react"
import PaginationConfig from "../Pagination/PaginationConfig";
import GenresMovie from "../Genres/Genres";
import getGenreID from "../Tackles/GenreID";
import MovieApiConfig from "./MoviesApiConfig";
// const config = require('../Config/Config');

// const api = config.appKey;
// import { api } from '../Config/Config'
// const api = config.apiKey;

const Movies = () => {
    let [movies, setMovies] = useState([]);
    let [page, SetPage] = useState(1);
    let [numberOfPages, setNumberOfPages] = useState();
    let [Genres, setGenres] = useState([]);
    let [selectedGenres, setSelectedGenres] = useState([]);

    // console.log(setSelectedGenres);
    const arr = getGenreID(selectedGenres);
    // console.log(arr);
    console.log(process.env);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${arr}`)
        .then(res => res.json())
        .then(res => {  
            // console.log(res)
        setMovies(res.results)
        setNumberOfPages(res.total_pages)
        }) 
    }, [page, selectedGenres])

    return (
       <div>
        <GenresMovie Genres={Genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
       <div className='film'>
            {movies.length > 0 && movies.map((movie) => (
                <MovieApiConfig key={movie.id} data={movie} />
            ))}
        </div>
        <div>
        <PaginationConfig SetPage={SetPage} numberOfPages={numberOfPages}/>  
        </div>
        </div>
    );
}

export default Movies