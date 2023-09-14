import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const DetailVenueContainer = styled.div`
  margin: 0 auto;
  max-width: 300px;
  position: relative;
`;

export const ImageAndRatingContainer = styled.div`
  position: relative;
`;

export const DetailVenueImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  object-fit: cover;
`;

export const DetailVenueIconsContainer = styled.div`
  display: flex;
  color: var(--secondary-color);
  font-size: 1.5rem;
`;

export const StyledCarouselButton = styled.button`
  width: 100%;
  max-width: 60px;
  background-color: var(--tertiary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px;
  font-size: 16px;

  &:hover {
    box-shadow: 0 0 10px var(--tertiary-color);
`;

export const StyledCarouselButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledCarousel = styled(Carousel)`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
