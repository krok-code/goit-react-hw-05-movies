import { getMovieBySearch } from 'api/tmdb';
import CenteredSpinner from 'components/CenteredSpinner';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { states } from 'utils/constant';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(states.LOADED);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/movies' && !location.search) {
      setQuery('');
      setMovies([]);
      setState(states.LOADED);
    }
    if (location.pathname === '/movies' && location.search) {
      setQuery(() => searchParams.get('query') ?? '');
    }
  }, [location.pathname, location.search, searchParams]);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    setState(states.LOADING);

    getMovieBySearch(query)
      .then(data => {
        if (!data.length) {
          setState(states.NO_RESULTS);
        }
        setMovies(data);
      })
      .catch(error => {
        setState(states.ERROR);
      })
      .finally(() => setTimeout(() => setState(states.LOADED), 3000));
  }, [query]);

  const handleSearchFormSubmit = searchQuery ={
    if (!searchQuery) {
      setSearchParams({});
      return;
    }
    if (query !== searchQuery) {
      setMovies([]);
      setQuery(searchQuery);
      setSearchParams({ query: searchQuery });
    }
  };

switch (state) {
  case states.LOADING:
    return <CenteredSpinner />;

  case states.LOADED:
    return (
      <>
        <SearchForm formSubmit={handleSearchFormSubmit} query={query} />
        <MoviesList movies={movies} />
      </>
    );

  case states.ERROR:
    return <p>Oops, something went wrong. Please try again later.</p>;

  case states.NO_RESULTS:
    return <p>No matching movies found</p>;

  default:
    return null;
}

export default Movies;
