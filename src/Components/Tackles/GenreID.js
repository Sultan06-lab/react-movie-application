const getGenreID = (selectedGenres) => {

    if(selectedGenres.length < 1) {
        return ' ';
    }
    const selectedGenresID = selectedGenres.map(genre => genre.id)
    return selectedGenresID.reduce((acc, cur) => acc + ', ' + cur);
}

export default getGenreID;