import {
  VenueCardContainer,
  VenueImage,
  RatingSquare,
  VenueName,
  VenueCity,
  ViewVenueButton,
} from "./VenueCard.styled";

const placeHolderImageUrl =
  "https://i0.wp.com/thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png?ssl=1";

const VenueCard = ({ imageUrl, rating, name, city }) => {
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

      <ViewVenueButton>View Venue</ViewVenueButton>
    </VenueCardContainer>
  );
};

export default VenueCard;
