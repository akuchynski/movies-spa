import React from "react";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MovieSearch } from "../MovieSearch";


describe('movie search component tests', () => {
    it('should render search component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieSearch />
                </MemoryRouter>
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('calls the onChange test', async () => {

        const movieTitle = "test movie title";

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieSearch />
                </MemoryRouter>
            </Provider>);

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: movieTitle },
        });

        screen.debug();

        await waitFor(() => {
            expect(screen.getByDisplayValue("movieTitle")).toBeInTheDocument();
        });
    });
});