import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { MemoryRouter } from "react-router-dom";
import { DeleteMovieModal } from "../DeleteMovie";

describe('movie delete modal component tests', () => {
    it('should render movie delete component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <DeleteMovieModal />
                </MemoryRouter>
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});