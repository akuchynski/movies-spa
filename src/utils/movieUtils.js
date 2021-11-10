const joinGenres = (genres) => {
    return genres.join(', ');
};

const getYear = (release_date) => {
    return release_date.slice(0, 4);
};

const getOptions = (genres) => {
    return genres.map(item => ({ value: item, label: item }));
};

export default {
    joinGenres,
    getYear,
    getOptions
};