import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { FilterLink } from "../FilterLink";

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