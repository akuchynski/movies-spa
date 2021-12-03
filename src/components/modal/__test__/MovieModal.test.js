import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { MovieModal } from "../MovieModal";

describe('movie modal component tests', () => {
    it('should render movie modal component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <MovieModal />
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});