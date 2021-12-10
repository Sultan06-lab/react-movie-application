import { useEffect, useState } from "react"
import PaginationConfig from "../Pagination/PaginationConfig";
import GenresMovie from "../Genres/Genres";
import getGenreID from "../Tackles/GenreID";
import SeriesApiConfig from "./SeriesApiConfig";
import './Series.css'

const Series = () => {
    let [series, setSeries] = useState([]);
    let [page, SetPage] = useState(1);
    let [numberOfPages, setNumberOfPages] = useState();
    let [Genres, setGenres] = useState([]);
    let [selectedGenres, setSelectedGenres] = useState([]);

    console.log(setSelectedGenres);
    const arr = getGenreID(selectedGenres);
    console.log(arr);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${arr}`)
        .then(res => res.json())
        .then(res => {  
            console.log(res)
        setSeries(res.results)
        setNumberOfPages(res.total_pages)
        }) 
    }, [page, selectedGenres])

    return (
       <div>
        <GenresMovie Genres={Genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
       <div className='film'>
            {series.length > 0 && series.map((tv) => (
                <SeriesApiConfig key={tv.id} data={tv} />
            ))}
        </div>
        <div>
        <PaginationConfig SetPage={SetPage} numberOfPages={numberOfPages}/>  
        </div>
        </div>
    );
}

export default Series

