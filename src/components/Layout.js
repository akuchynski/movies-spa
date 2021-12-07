import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from "../../src/store/configureStore";
import { HeaderMenu } from '../../src/components/HeaderMenu';
import { ErrorBoundary } from "../../src/components/ErrorBoundary";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Layouts Example</title>
            </Head>
            <Provider store={store}>
                <ErrorBoundary>
                    <HeaderMenu />
                    <div className="content">{children}</div>
                </ErrorBoundary>
            </Provider>
        </>
    );
}