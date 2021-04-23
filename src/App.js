import "./App.css";
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
import { useState, useEffect } from "react";
import { UserContext } from "./context/user_context";
import { MyStoriesPage } from "./components/my_stories_page";

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(null);

  const isLoggedIn = Boolean(token);

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
      setName(existingUsername);
    }
  }, []);

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
              {isLoggedIn ? <span>favorites</span> : <Redirect to="/login" />}
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
