import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    const { id } = useParams()
    console.log(id)
    
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        console.log('make an api request')
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2447f9b4acfa023be9a5dfae6f1bbec6&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovieDetails(data)
            setIsLoading(false)
        })
    }, [id])

    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="Loading..." /> }
        if(movieDetails) {
            let posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            console.log(posterPath, `is the details of poster path`);

            if (movieDetails.poster_path === null) {
                return (
                    <>
                    <Hero text={movieDetails.original_title} backdrop="https://images.unsplash.com/photo-1629738996911-afad777384de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://images.unsplash.com/photo-1629738996911-afad777384de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="..." className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-3">
                      <h2>{movieDetails.original_title}</h2>
                      <p>
                          {movieDetails.overview}
                      </p>
                   </div>
                        </div>
                     </div>
                    </>
                )
            }

            
           
           return (
           <>
           <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
           <div className="container my-5">
               <div className="row">
                   <div className="col-md-3">
                       <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                   </div>
                   <div className="col-md-3">
                      <h2>{movieDetails.original_title}</h2>
                      <p>
                          {movieDetails.overview}
                      </p>
                   </div>
               </div>
           </div>

           </>
           )
        }
        
    }
   return renderMovieDetails();
   
   
};

export default MovieView;