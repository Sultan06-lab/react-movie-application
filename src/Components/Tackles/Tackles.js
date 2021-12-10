const getGenresId = (selectedGenres) => {

    if (selectedGenres) {
        return '';
    }

    const genresId = selectedGenres.map(genre => genre.id);
    return genresId.reduce((acc, cur) => acc + ', ' + cur);
}

export default getGenresId;