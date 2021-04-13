import "./App.css";
import { MainNav } from "./components/main_nav";
import Container from "react-bootstrap/Container";
import { NewsFeedPage } from "./components/news_feed_page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./components/login_page";

const App = () => {
  return (
    <Router>
      <MainNav />
      <Container className="mt-5 pt-5">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/favorites">
            <span>favorites</span>
          </Route>
          <Route path="/my-stories">
            <span>my stories</span>
          </Route>
          <Route path="/">
            <NewsFeedPage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
