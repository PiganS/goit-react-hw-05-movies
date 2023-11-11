import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { StyledForm } from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { fetchMovie } from 'components/Api';
import { FilmsList } from 'components/TrendingFilmsList/TrendingFilmsList';

export const Searchbar = () => {
  const [films, setFilms] = useState([]);
  const [spiner, setSpiner] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getFilms = async () => {
      try {
        setSpiner(true);
        const searchFilms = await fetchMovie(query);
        if (searchFilms.length === 0) {
          toast.error('No movies found for your query!');
        }
        setFilms(searchFilms);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSpiner(false);
      }
    };

    getFilms();
  }, [query]);

  const onFormSubmit = evt => {
    evt.preventDefault();
    const value = evt.currentTarget.elements.searchId.value;
    setSearchParams({ query: value });
  };

  return (
    <>
      <StyledForm className="searchbar">
        <form onSubmit={onFormSubmit}>
          <button type="submit" className="button">
            <FaSearch />
          </button>

          <input
            className="input"
            name="searchId"
            type="text"
            placeholder="Search movies"
          />
        </form>
      </StyledForm>
      {spiner && <Loader />}
      <FilmsList films={films} />
    </>
  );
};
