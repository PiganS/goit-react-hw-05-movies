import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from '../Api';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import {
  StyledReviewsAutor,
  StyledReviewsItem,
  StyledReviewsList,
} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [spiner, setSpiner] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const filmReview = async () => {
      try {
        setSpiner(true);
        const reviews = await fetchReviews(movieId);
        if (reviews.length === 0) {
          toast.info('Unfortunately there are no reviews');
        }
        setReviews(reviews);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setSpiner(false);
      }
    };

    filmReview();
  }, [movieId]);

  return (
    <>
      {spiner && <Loader />}
      {reviews.length !== 0 && (
        <StyledReviewsList>
          {reviews.map(review => (
            <StyledReviewsItem key={review.id}>
              <StyledReviewsAutor>Author: {review.author}</StyledReviewsAutor>
              <p>{review.content}</p>
            </StyledReviewsItem>
          ))}
        </StyledReviewsList>
      )}
      {reviews.length === 0 && <div>Unfortunately there are no reviews</div>}
    </>
  );
};
