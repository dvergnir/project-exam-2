import {
  VenueCardContainer,
  VenueImage,
  RatingSquare,
  VenueName,
  VenueCity,
  VenuePrice,
  ViewVenueBtnContainer,
} from "./VenueCard.styled";
import { StyledButton } from "../utils/StyledButton.styled";
import { Link } from "react-router-dom";

const VenueCard = ({ imageUrl, rating, name, city, price, id }) => {
  const formattedPrice = price.toLocaleString("nb-NO");

  return (
    <VenueCardContainer>
      <VenueImage src={imageUrl} alt="Venue" />
      <RatingSquare>{rating}/5</RatingSquare>
      <VenueName>{name}</VenueName>
      {city && <VenueCity>{city}</VenueCity>}{" "}
      <ViewVenueBtnContainer>
        <VenuePrice>From {formattedPrice},-</VenuePrice>
        <Link to={`/venues/${id}`}>
          <StyledButton>View Venue</StyledButton>
        </Link>
      </ViewVenueBtnContainer>
    </VenueCardContainer>
  );
};

export default VenueCard;
