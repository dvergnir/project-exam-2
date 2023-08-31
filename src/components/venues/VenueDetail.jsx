import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../../api/getVenueById";
import {
  VenueCardContainer,
  VenueImage,
  RatingSquare,
  VenueName,
  VenueCity,
  ViewVenueButton,
} from "./VenueCard.styled";

const VenueDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchVenue = async () => {
      const venueData = await getVenueById(id);
      setProduct(venueData);
    };

    fetchVenue();
  }, [id]);
};

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
    <Link to={`/holidaze/venues/${id}`}>
      <ViewVenueButton>View Venue</ViewVenueButton>
    </Link>
  </VenueCardContainer>
);

export default VenueDetail;
