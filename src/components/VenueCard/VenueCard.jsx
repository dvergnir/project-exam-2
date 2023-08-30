import {
  VenueCardContainer,
  VenueImage,
  RatingSquare,
  VenueDescription,
  ViewMoreButton,
} from "./VenueCard.styled";

const VenueCard = ({ imageUrl, rating, description }) => {
  return (
    <VenueCardContainer>
      <VenueImage src={imageUrl} alt="Venue" />
      <RatingSquare>{rating}</RatingSquare>
      <VenueDescription>{description}</VenueDescription>
      <ViewMoreButton>View More</ViewMoreButton>
    </VenueCardContainer>
  );
};

export default VenueCard;
