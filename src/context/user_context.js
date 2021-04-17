import { createContext } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
});
