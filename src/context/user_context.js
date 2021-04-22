import { createContext } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  token: null,
  setToken: () => null,
  name: "",
  setName: () => "",
});