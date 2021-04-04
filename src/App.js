import "./App.css";
import { MainNav } from "./components/main_nav";
import Container from "react-bootstrap/Container";
import { NewsFeedPage } from "./components/news_feed_page";

const App = () => {
  return (
    <div className="App">
      <MainNav />
      <Container className="mt-5 pt-5">
        <NewsFeedPage />
      </Container>
    </div>
  );
};

export default App;
