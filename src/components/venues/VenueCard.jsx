import {
  VenueCardContainer,
  VenueImage,
  RatingSquare,
  VenueName,
  VenueCity,
  ViewVenueButton,
} from "./VenueCard.styled";
import { Link } from "react-router-dom";

const placeHolderImageUrl =
  "https://i0.wp.com/thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png?ssl=1";

const VenueCard = ({ imageUrl, rating, name, city, id }) => {
  return (
    <VenueCardContainer>
      {imageUrl ? (
        <VenueImage src={imageUrl} alt="Venue" />
      ) : (
        <VenueImage src={placeHolderImageUrl} alt="Placeholder" />
      )}
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
