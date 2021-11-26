import React from "react";
import { render } from "@testing-library/react";
import { Filter } from "../Filter";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { MemoryRouter } from "react-router-dom";

describe('filter tests', () => {
    it('should render filter component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Filter />
                </MemoryRouter>
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});