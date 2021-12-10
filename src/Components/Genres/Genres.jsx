import Chip from '@mui/material/Chip';
import { useEffect } from 'react';
import './Genres.css'


const GenresMovie = ({ Genres, setGenres, selectedGenres, setSelectedGenres }) => {

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/list?api_key=b18527e785a2aad40a1989aa9e7b7495&language=en-US')
            .then(res => res.json())
            .then(data => {
                setGenres(data.genres)
                console.log(Genres);

            })
    }, [])

    const onHandleChange = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        console.log(selectedGenres)
        setGenres(Genres.filter(Genre => Genre.id !== genre.id));
        // console.log(selectedGenres);
    }
    
    const onHandleDelete = (genre) => {
        setSelectedGenres(selectedGenres.filter(select => select.id !== genre.id))
        // setGenres(Genres.filter(Genre => Genre.id !== genre.id))
        setGenres([...Genres, genre])
    }

    return (
        <div className='Genres'>
            {selectedGenres.map(select => (
                <Chip label={select.name} color="primary"
                onDelete={() => onHandleDelete(select)}
                />
            ))}
            {Genres.map(genre => (
                <Chip
                    onClick={() => onHandleChange(genre)}
                    style={{ margin: '3px' }}
                    label={genre.name}
                    variant="outlined" clickable
                />
            ))}
        </div>
    )
}

export default GenresMovie;