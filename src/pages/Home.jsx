import { fetchTrending } from 'components/Api';
import { useEffect, useState } from 'react';
import { FilmsList } from 'components/TrendingFilmsList/TrendingFilmsList';
import { StyledTrendingTitle } from 'components/TrendingFilmsList/TrendingFilmsList.styled';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [spiner, setSpiner] = useState(false);

  useEffect(() => {
    const getTrendingFilms = async () => {
      try {
        setSpiner(true);
        const trendingFilms = await fetchTrending();
        setFilms(trendingFilms);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSpiner(false);
      }
    };

    getTrendingFilms();
  }, []);

  return (
    <div>
      <StyledTrendingTitle>Trending today</StyledTrendingTitle>
      {spiner && <Loader />}
      {films.length !== 0 && <FilmsList films={films} />}
    </div>
  );
};
export default Home;
