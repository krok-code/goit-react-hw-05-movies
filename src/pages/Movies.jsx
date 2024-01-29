import { getMovieBySearch } from 'api/tmdb';
import CenteredSpinner from 'components/CenteredSpinner';
import MoviesList from 'components/MoviesList';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { states } from 'utils/constant';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(states.LOADED);

  const handleInputChange = e => {
    setQuery(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMovies([]);

    if (!query) {
      e.target.reset();
      setSearchParams({});
      return;
    }

    setSearchParams({ query });
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
                value={query}
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
};

export default Movies;
