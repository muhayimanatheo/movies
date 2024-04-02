// import logo from './logo.svg';
import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import HomeFunc from "./components/pages/home";
import GenreFunc from "./components/pages/genre";
import NewsFunc from "./components/pages/news";
import ShowsFunc from "./components/pages/tvshow";
import MoviesFunc from "./components/pages/movies";
import LoginPage from "./components/authontication/login";
import DetailsFunc from "./components/pages/details";
import Explore from "./components/pages/explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeFunc />} />
          <Route path="/details/:id" element={<DetailsFunc />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/genre" element={<GenreFunc />} />
          <Route path="/news" element={<NewsFunc />} />
          <Route path="/movies/:id" element={<MoviesFunc />} />
          <Route path="/tvshow" element={<ShowsFunc />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
