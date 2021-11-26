import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../store/configureStore";
import { MemoryRouter } from "react-router-dom";
import { HeaderMenu } from "../HeaderMenu";

describe('header menu components tests', () => {
    it('should render header menu component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <HeaderMenu />
                </MemoryRouter>
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});