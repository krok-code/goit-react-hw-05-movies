import { useEffect, useState } from 'react';
import { getTrending } from 'api/tmdb';
import TrendingList from 'components/TrendingList';
import CenteredSpinner from 'components/CenteredSpinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrending()
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Oh no, error: ${error}`);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <CenteredSpinner />;
  if (error) return <p>Oops, something went wrong. Please try again later.</p>;

  return (
    <>
      <h1 className="nb-3">Trending today</h1>
      <TrendingList movies={movies} />
    </>
  );
};

export default Home;
