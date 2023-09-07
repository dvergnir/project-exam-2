import {
  VenueCardContainer,
  VenueImage,
  RatingSquare,
  VenueName,
  VenueCity,
  ViewVenueButton,
} from "./VenueCard.styled";
import { Link } from "react-router-dom";

const placeHolderImageUrl = "https://placehold.co/600x400/png";

const VenueCard = ({ imageUrl, rating, name, city, id }) => {
  const handleImageError = (e) => {
    e.target.src = placeHolderImageUrl;
  };

  return (
    <VenueCardContainer>
      <VenueImage src={imageUrl} alt="Venue" onError={handleImageError} />
      <RatingSquare>{rating}/5</RatingSquare>
      <VenueName>{name}</VenueName>
      <VenueCity>{city}</VenueCity>
      <Link to={`/venues/${id}`}>
        <ViewVenueButton>View Venue</ViewVenueButton>
      </Link>
    </VenueCardContainer>
  );
};

export default VenueCard;
