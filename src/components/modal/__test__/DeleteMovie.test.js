import React from "react";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from "../../../store/configureStore";
import { DeleteMovieModal } from "../DeleteMovie";

describe('movie delete modal component tests', () => {
    it('should render movie delete component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <DeleteMovieModal />
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});