import { useEffect, useState } from "react"
import TrendingApiConfig from "./TrendingApiConfig";
import './Trending.css'
import PaginationConfig from "../Pagination/PaginationConfig";

const Trending = () => {
    let [movies, setMovies] = useState([]);
    let [page, SetPage] = useState(1);
    let [numberOfPages, setNumberOfPages] = useState();

    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.results);  
        setMovies(res.results)
        setNumberOfPages(res.total_pages)
        }) 
    }, [page])


    return (
       <div>
       <div className='film'>
            {movies.length > 0 && movies.map((movie) => (
                <TrendingApiConfig key={movie.id} data={movie} />
            ))}
        </div>
        <div>
        <PaginationConfig SetPage={SetPage} numberOfPages={numberOfPages}/>  
        </div>
        </div>
    );
}

export default Trending

