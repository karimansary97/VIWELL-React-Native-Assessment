import React from "react";
import { render } from "@testing-library/react-native";
import Home from "./Products";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

jest.useFakeTimers();

function renderWithProvider(ui: React.ReactElement) {
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("Home Component", () => {
  it("Check if the Loading screen appear or not ", async () => {
    const { getByTestId } = renderWithProvider(<Home />);

    expect(getByTestId("loading-screen")).toBeTruthy();
  }, 4000);
});
