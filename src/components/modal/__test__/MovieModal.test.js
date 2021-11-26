import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { MemoryRouter } from "react-router-dom";
import { MovieModal } from "../MovieModal";

describe('movie modal component tests', () => {
    it('should render movie modal component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieModal />
                </MemoryRouter>
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});