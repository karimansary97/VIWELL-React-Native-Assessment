import { ReactNode } from "react";
import { renderHook, waitFor } from "@testing-library/react-native";
import { useGetProductsQuery } from "./products"; // Your hook
import { store } from "../store";
import { Provider } from "react-redux";
import fetchMock from "jest-fetch-mock";

// Enable fetch mocks
fetchMock.enableMocks();
jest.useFakeTimers();

// Wrapper component to provide store context
function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

// Test suite
describe("RTK for products slice ", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("API returns success", async () => {
    const { result } = renderHook(
      () => useGetProductsQuery({ skip: 0, limit: 10 }),
      { wrapper: Wrapper }
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(fetchMock).toHaveBeenCalledTimes(1);
  }, 4000);

  test("Check the response of  data", async () => {
    const { result } = renderHook(
      () => useGetProductsQuery({ skip: 0, limit: 10 }),
      { wrapper: Wrapper }
    );

    fetchMock.mockResponseOnce(
      JSON.stringify({
        products: [
          { id: 1, title: "Product 1", price: 10 },
          { id: 2, title: "Product 2", price: 20 },
        ],
      })
    );

    await waitFor(() => {
      expect(result.current.currentData).toEqual([
        { id: 1, title: "Product 1", price: 10 },
        { id: 2, title: "Product 2", price: 20 },
      ]);
    });
  }, 4000);

  test("should set isFetching to true while fetching", async () => {
    const { result } = renderHook(
      () => useGetProductsQuery({ skip: 0, limit: 10 }),
      { wrapper: Wrapper }
    );

    expect(result.current.isFetching).toBe(true);

    await waitFor(() => expect(result.current.isFetching).toBe(false));
  }, 4000);
});
