import Head from 'next/head';
import axios from "axios";
import { Provider } from 'react-redux';
import { store } from "../../src/store/configureStore";
import { HeaderMenu } from '../../src/components/HeaderMenu';
import { ErrorBoundary } from "../../src/components/ErrorBoundary";
import { MovieList } from "../../src/components/Movie/MovieList";
import { Filter } from "../../src/components/Filter/Filter";

export default function Search({ movies }) {
    return (
        <div>
            <Head>
                <title>Search movie</title>
                <meta name="description" content="Search movie" />
            </Head>
            <Provider store={store}>
                <ErrorBoundary>
                    <HeaderMenu />
                    <div className="content">
                        <Filter />
                        <MovieList moviesServer={movies} />
                    </div>
                </ErrorBoundary>
            </Provider>
        </div>
    );
}

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
