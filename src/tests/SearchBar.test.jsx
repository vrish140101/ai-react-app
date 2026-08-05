import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("renders search input and buttons", () => {
    render(
      <SearchBar
        onSearch={() => {}}
        onCurrentLocation={() => {}}
      />
    );

    expect(
      screen.getByPlaceholderText("Enter city name...")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /search weather/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /use current location/i })
    ).toBeInTheDocument();
  });
});