import "./app.css";
import { MainNav } from "./components/main_nav";
import Container from "react-bootstrap/Container";
import { NewsFeedPage } from "./components/news_feed_page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "./components/login_page";
import { useState, useEffect, useCallback } from "react";
import { UserContext } from "./context/user_context";
import { MyStoriesPage } from "./components/my_stories_page";
import { FavoritesPage } from "./components/favorites_page";
import axios from "axios";
import { API_URL } from "./config";

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);

  const isLoggedIn = Boolean(token);

  const getUserFavorites = useCallback(async () => {
    try {
      const response = await axios.get(
        `${API_URL}/users/${username}?token=${token}`
      );
      setUserFavorites(response.data.user.favorites);
    } catch (error) {
      console.log(error);
      alert("Something went wrong! Please try again");
    }
  }, [token, username]);

  useEffect(() => {
    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      setToken(existingToken);
    }
    const existingName = localStorage.getItem("name");
    if (existingName) {
      setName(existingName);
    }
    const existingUsername = localStorage.getItem("username");
    if (existingUsername) {
      setUsername(existingUsername);
    }
  }, [getUserFavorites]);

  useEffect(() => {
    if (token && username) {
      getUserFavorites();
    }
  }, [getUserFavorites, token, username]);

  const addToFavorites = async (id) => {
    await axios.post(
      `${API_URL}/users/${username}/favorites/${id}?token=${token}`
    );
    getUserFavorites();
  };

  const deleteFromFavorites = async (id) => {
    await axios.delete(
      `${API_URL}/users/${username}/favorites/${id}?token=${token}`
    );
    getUserFavorites();
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        name,
        setName,
        token,
        setToken,
        username,
        setUsername,
        addToFavorites,
        deleteFromFavorites,
        userFavorites,
        getUserFavorites,
      }}
    >
      <Router>
        <MainNav />
        <Container className="mt-5 pt-5">
          <Switch>
            <Route path="/login">
              {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
            </Route>
            <Route path="/favorites">
              {isLoggedIn ? <FavoritesPage /> : <Redirect to="/login" />}
            </Route>
            <Route path="/my-stories">
              {isLoggedIn ? <MyStoriesPage /> : <Redirect to="/login" />}
            </Route>
            <Route path="/">
              <NewsFeedPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
