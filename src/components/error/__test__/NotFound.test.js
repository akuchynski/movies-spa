import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "../NotFound";

describe('error components tests', () => {
    it('should render not found component', () => {
        const { asFragment } = render(<NotFound />);
        expect(asFragment()).toMatchSnapshot();
    });
});