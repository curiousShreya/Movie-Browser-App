import "./App.css";

import { useState, useEffect } from "react";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import NotFound from "./components/NotFound";
import MovieView from "./components/MovieView";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      console.log(searchText, "is the text")
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2447f9b4acfa023be9a5dfae6f1bbec6&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <NavigationBar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" >
          <AboutView />
        </Route>
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
