import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../store/configureStore";
import { HeaderMenu } from "../HeaderMenu";

describe('header menu components tests', () => {
    it('should render header menu component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <HeaderMenu />
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});