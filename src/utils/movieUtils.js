export const joinItems = (items) => {
    return items.join(', ');
};

export const getYear = (release_date) => {
    return release_date.slice(0, 4);
};

export const getOptions = (genres) => {
    return genres.map(item => ({ value: item, label: item }));
};

export const getGenres = (options) => {
    return options.map(item => item.value);
};
