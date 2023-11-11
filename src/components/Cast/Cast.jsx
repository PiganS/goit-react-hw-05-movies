import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCasts } from '../Api';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { StyledCast, StyledCastItem, StyledCastName } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [spiner, setSpiner] = useState(false);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const actorsList = async () => {
      try {
        setSpiner(true);
        const actors = await fetchCasts(movieId);
        setActors(actors);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSpiner(false);
      }
    };

    actorsList();
  }, [movieId]);

  return (
    <div>
      {spiner && <Loader />}
      <StyledCast>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <StyledCastItem key={id}>
            <img
              width="200px"
              height="300px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://cdn.pixabay.com/photo/2013/07/12/15/33/cutting-150066_1280.png`
              }
              alt={original_name}
            />
            <StyledCastName>{name}</StyledCastName>
            <p>Character: {character}</p>
          </StyledCastItem>
        ))}
      </StyledCast>
    </div>
  );
};
