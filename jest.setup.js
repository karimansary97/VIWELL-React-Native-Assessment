// jest.setup.js or add to your setupFilesAfterEnv in Jest config
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

jest.mock("react-native-safe-area-context", () => {
  const SafeAreaContext = require("react").createContext({
    insetTop: 0,
    insetBottom: 0,
    insetLeft: 0,
    insetRight: 0,
  });
  return {
    SafeAreaProvider: ({ children }) => children,
    useSafeAreaInsets: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
  };
});
