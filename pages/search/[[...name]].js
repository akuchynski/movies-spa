import axios from "axios";
import Layout from "../../src/components/Layout";
import { MovieList } from "../../src/components/Movie/MovieList";
import { Filter } from "../../src/components/Filter/Filter";

export default function Search({ movies }) {
    return (
        <MovieList moviesServer={movies} />
    );
}

Search.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Filter />
            {page}
        </Layout>
    );
};

export async function getServerSideProps({ query }) {

    const { name, genre, sortBy = 'vote_average', sortOrder = 'desc' } = query;
    const [searchQuery] = name || [];

    const { data: { data } } = await axios.get(process.env.SERVER_URL, {
        params: {
            searchBy: 'title',
            search: searchQuery,
            filter: genre,
            sortBy: sortBy,
            sortOrder: sortOrder
        }
    });

    return {
        props: { movies: data },
    };
}