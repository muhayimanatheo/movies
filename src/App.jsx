// import logo from './logo.svg';
import './App.css';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/layout';
import HomeFunc from './components/pages/home';
import ExploreFunc from './components/pages/explore';
import GenreFunc from './components/pages/genre';
import NewsFunc from './components/pages/news';
import ShowsFunc from './components/pages/tvshow';
import MoviesFunc from './components/pages/movies';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeFunc />} />
          {/*<Route path ="/details/:id" element={<Details/>}/>*/}
          <Route path="/explore/:id" element={<ExploreFunc />} />
          <Route path="/genre" element={<GenreFunc />} />
          <Route path="/news" element={<NewsFunc />} />
          <Route path="/movies/:id" element={<MoviesFunc />} />
          <Route path="/tvshow" element={<ShowsFunc />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;