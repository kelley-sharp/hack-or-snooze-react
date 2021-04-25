import { createContext } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  token: null,
  setToken: () => null,
  name: "",
  setName: () => null,
  username: "",
  setUsername: () => null,
  addToFavorites: () => null,
  deleteFromFavorites: () => null,
  userFavorites: [],
  setUserFavorites: () => null,
});
