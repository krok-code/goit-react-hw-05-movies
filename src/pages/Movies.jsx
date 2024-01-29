import { getMovieBySearch } from 'api/tmdb';
import CenteredSpinner from 'components/CenteredSpinner';
import MoviesList from 'components/MoviesList';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { states } from 'utils/constant';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [inputValue, setInputValue] = useState(query);
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(states.LOADED);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    setState(states.LOADING);
    setMovies([]);

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

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = inputValue.trim();
    if (!searchQuery) {
      e.target.reset();
      setSearchParams({});
      return;
    }
    setQuery(searchQuery);

    setSearchParams({ query: searchQuery });
  };
};

switch (state) {
  case states.LOADING:
    return <CenteredSpinner />;

  case states.LOADED:
    return (
      <>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Film title"
              aria-label="Film title"
              name="query"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="search-button"
            >
              Search
            </Button>
          </InputGroup>
        </Form>
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
