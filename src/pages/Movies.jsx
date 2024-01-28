import { getMovieBySearch } from 'api/tmdb';
import CenteredSpinner from 'components/CenteredSpinner';
import MoviesList from 'components/MoviesList';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const serializeFormQuery = ref => {
    return { query: ref.elements.query.value };
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMovies([]);
    const searchQuery = query.trim();

    if (!searchQuery) {
      setQuery('');
      return;
    }

    const params = serializeFormQuery(e.target);

    setSearchParams(params);

    getMovieBySearch(searchQuery)
      .then(data => {
        setLoading(true);
        setMovies(data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <CenteredSpinner />;
  if (error) return <p>Oops, something went wrong. Please try again later.</p>;

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
          <Button type="submit" variant="outline-secondary" id="search-button">
            Search
          </Button>
        </InputGroup>
      </Form>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
