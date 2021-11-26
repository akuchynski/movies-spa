import React from "react";
import { render } from "@testing-library/react";
import { MovieMessages } from "../MovieMessages";

describe('movie messages tests', () => {
    it('should render movie messages component', () => {
        const { asFragment } = render(<MovieMessages isLoading={true}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});