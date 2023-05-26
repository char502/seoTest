import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/index";

// import data from "../data.json";
// import prosAndConsObj from "./index";

describe("HomePage", () => {
  it("should render index page", async () => {
    render(<Home />);

    await waitFor(() => {
      screen.findByText("Samsung galaxy A53");
      screen.findByText("Stunning screen");

      screen.logTestingPlaygroundURL();
    });
  });
});
