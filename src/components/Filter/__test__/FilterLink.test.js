import React from "react";
import { render } from "@testing-library/react";
import { FilterLink } from "../FilterLink";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { MemoryRouter } from "react-router-dom";

describe('filter links tests', () => {
    const genreValue = "Horror";
    it('should render filter link component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <FilterLink genre={genreValue} />
                </MemoryRouter>
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});