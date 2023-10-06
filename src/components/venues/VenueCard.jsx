import {
  VenueCardContainer,
  VenueImage,
  RatingSquare,
  VenueName,
  VenueCity,
} from "./VenueCard.styled";
import { StyledButton } from "../utils/StyledButton.styled";
import { Link } from "react-router-dom";

const VenueCard = ({ imageUrl, rating, name, city, id }) => {
  return (
    <VenueCardContainer>
      <VenueImage src={imageUrl} alt="Venue" />
      <RatingSquare>{rating}/5</RatingSquare>
      <VenueName>{name}</VenueName>
      <VenueCity>{city}</VenueCity>
      <Link to={`/venues/${id}`}>
        <StyledButton>View Venue</StyledButton>
      </Link>
    </VenueCardContainer>
  );
};

export default VenueCard;
