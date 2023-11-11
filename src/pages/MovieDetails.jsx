import { fetchDetails } from 'components/Api';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import {
  AdditionalInformation,
  StyledBox,
  StyledDescrip,
  StyledGoToBack,
  StyledInformationBox,
  StyledInformationTitle,
  StyledLink,
} from './MovieDetails.styled';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [spiner, setSpiner] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getDetailsFilm = async () => {
      try {
        setSpiner(true);
        const details = await fetchDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.log(error);
      } finally {
        setSpiner(false);
      }
    };

    getDetailsFilm();
  }, [movieId]);

  return (
    <div>
      {spiner && <Loader />}

      {movieDetails && (
        <>
          <StyledGoToBack to={backLinkRef.current}>
            <FaArrowLeft /> back
          </StyledGoToBack>
          <StyledBox>
            <div>
              <img
                width="300px"
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                    : `https://cdn.pixabay.com/photo/2013/07/12/15/33/cutting-150066_1280.png`
                }
                alt={movieDetails.title}
              />
            </div>

            <StyledDescrip>
              <h1>{movieDetails.title}</h1>
              <h3>
                Rating: {movieDetails.vote_average} <FaStar />
              </h3>
              <h2>Overview</h2>
              <p>{movieDetails.overview}</p>
              <h2>Genres</h2>
              <ul>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </StyledDescrip>
          </StyledBox>
          <AdditionalInformation>
            <StyledInformationTitle>
              Additional information
            </StyledInformationTitle>

            <StyledInformationBox>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </StyledInformationBox>
          </AdditionalInformation>

          <Outlet />
        </>
      )}
    </div>
  );
};
export default MoviesDetails;
