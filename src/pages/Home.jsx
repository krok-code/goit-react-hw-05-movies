import { useEffect, useState } from 'react';
import { getTrending } from 'api/tmdb';
import MoviesList from 'components/MoviesList';
import CenteredSpinner from 'components/CenteredSpinner';
import { states } from 'utils/constant';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(states.LOADING);

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovies(data);
        setState(states.LOADED);
      })
      .catch(error => {
        setState(states.ERROR);
      });
  }, []);

  switch (state) {
    case states.LOADING:
      return <CenteredSpinner />;

    case states.LOADED:
      return (
        <>
          <h1 className="nb-3">Trending today</h1>
          <MoviesList movies={movies} />
        </>
      );

    case states.ERROR:
      return <p>Oops, something went wrong. Please try again later.</p>;

    default:
      return null;
  }
};

export default Home;
