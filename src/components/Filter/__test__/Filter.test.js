import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { Filter } from "../Filter";
import { store } from "../../../store/configureStore";

describe('filter tests', () => {
    it('should render filter component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <Filter />
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});