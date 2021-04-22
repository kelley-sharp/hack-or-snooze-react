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
import { useState } from "react";
import { UserContext } from "./context/user_context";

const App = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);

  const isLoggedIn = Boolean(token);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, name, setName, token, setToken }}
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
              {isLoggedIn ? <span>my stories</span> : <Redirect to="/login" />}
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
