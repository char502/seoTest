import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Article from "../pages/index";

describe("HomePage", () => {
  it("should render index page", async () => {
    render(<Article />);

    await waitFor(() => {
      screen.findByText("Samsung galaxy A53");
      screen.findByText("32645");
      screen.findByText("Stunning screen");
      screen.findByText("Quality cameras");
      screen.findByText("Five years of security updates");
      screen.findByText("No wireless charging");
      screen.findByText("Average performance");
    });
  });
});
