import Hero from "./Hero";
import { Link } from "react-router-dom";
// tmdb API key = 2447f9b4acfa023be9a5dfae6f1bbec6
// example link for movies = "https://api.themoviedb.org/3/search/company?api_key=2447f9b4acfa023be9a5dfae6f1bbec6&query=star%20wars&page=&include_adult=false"

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div class="card-body">
          <h5 class="card-title">{movie.original_title}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={detailUrl} class="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  let resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  console.log(resultsHtml, `are the search results`);
  
    
  
  return  (   
    <>
      <Hero text={title} />
      {resultsHtml.length === 0 && 
      <div className="container my-5">
        <div className="row">
          <div className="lead">
            Sorry! {keyword} is not available in the database.
    </div>
    </div>
    </div>}
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};
export default SearchView;
