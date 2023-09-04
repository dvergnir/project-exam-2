import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getVenueById } from "../../api/getVenueById";
import {
  DetailVenueContainer,
  ImageAndRatingContainer,
  DetailVenueImage,
} from "./VenueDetail.styled";
import { RatingSquare } from "./VenueCard.styled";

const placeHolderImageUrl =
  "https://i0.wp.com/thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png?ssl=1";

const VenueDetail = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchVenue = async () => {
      const venueData = await getVenueById(id);
      setImageUrl(venueData.media);
      setRating(venueData.rating);
      setName(venueData.name);
      setCity(venueData.location.city);
      setDescription(venueData.description);
      setPrice(venueData.price);
    };

    fetchVenue();
  }, [id]);

  return (
    <DetailVenueContainer>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <ImageAndRatingContainer>
        <DetailVenueImage src={imageUrl} alt="Venue" />
        <RatingSquare>{rating}/5</RatingSquare>
      </ImageAndRatingContainer>
      <p>{description}</p>
      <p>{price}</p>
    </DetailVenueContainer>
  );
};

export default VenueDetail;
