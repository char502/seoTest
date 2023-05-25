// @ts-nocheck
import React from "react";
import { useRouter } from "next/router";
import { render, screen } from "@testing-library/react";
import ProsAndCons from "../pages/[item-id]";
import data from "../data.json";
import prosAndConsObj from "./index";

// jest.mock("next/router", () => ({
//   useRouter: jest.fn(),
// }));

jest.mock("next/router", () => ({
  useRouter() {
    prosAndConsObj.forEach((item) => {
      return {
        pathname: `/${item.id}`,
        query: {
          id: item.id,
          title: item.itemTitle,
          arr: JSON.stringify(item.prosAndConsArr),
        },
        // ... whatever else you you call on `router`
      };
    });
  },
}));

describe("HomePage", () => {
  it("should render the heading", () => {
    // const textToFind = "Hello World!";

    render(<ProsAndCons />);
    // const heading = screen.getByText(textToFind);

    // expect(heading).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
