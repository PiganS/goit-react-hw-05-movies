import { useLocation } from 'react-router-dom';
import {
  StyledFilmsGallery,
  StyledItem,
  StyledPosterMovie,
  StyledTitleMovie,
} from './TrendingFilmsList.styled';

export const FilmsList = ({ films }) => {
  const location = useLocation();
  return (
    <StyledFilmsGallery>
      {films.map(film => {
        return (
          <StyledItem key={film.id}>
            <StyledPosterMovie
              width="300px"
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                  : `https://cdn.pixabay.com/photo/2013/07/12/15/33/cutting-150066_1280.png`
              }
              alt={film.title}
            />
            <StyledTitleMovie
              state={{ from: location }}
              to={`/movies/${film.id}`}
            >
              {film.title}
            </StyledTitleMovie>
          </StyledItem>
        );
      })}
    </StyledFilmsGallery>
  );
};
