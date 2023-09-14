import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../api/venue/getVenueById";
import {
  DetailVenueContainer,
  ImageAndRatingContainer,
  DetailVenueImage,
  DetailVenueIconsContainer,
} from "./VenueDetail.styled";
import { RatingSquare } from "./VenueCard.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faParking,
  faUtensils,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import BookingForm from "../utils/BookingForm";

const placeHolderImageUrl = "https://placehold.co/600x400/png";

const VenueDetail = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [meta, setMeta] = useState({
    wifi: true,
    parking: true,
    breakfast: false,
    pets: true,
  });
  const [maxGuests, setMaxGuests] = useState(1);

  const handleImageError = (e) => {
    e.target.src = placeHolderImageUrl;
  };

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  useEffect(() => {
    const fetchVenue = async () => {
      const venueData = await getVenueById(id);
      setImageUrl(venueData.media);
      setRating(venueData.rating);
      setName(venueData.name);
      setCity(venueData.location.city);
      setDescription(venueData.description);
      setPrice(venueData.price);
      setMeta(venueData.meta);
      setMaxGuests(venueData.maxGuests);
    };

    fetchVenue();
  }, [id]);

  return (
    <DetailVenueContainer>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <ImageAndRatingContainer>
        <DetailVenueImage
          src={imageUrl}
          alt="Venue"
          onError={handleImageError}
        />
        <RatingSquare>{rating}/5</RatingSquare>
      </ImageAndRatingContainer>

      <p>{description}</p>
      <DetailVenueIconsContainer>
        {meta.wifi && (
          <FontAwesomeIcon
            icon={faWifi}
            className="venue-icon"
            aria-label="Wi-Fi"
          />
        )}
        {meta.parking && (
          <FontAwesomeIcon
            icon={faParking}
            className="venue-icon"
            aria-label="Parking"
          />
        )}
        {meta.breakfast && (
          <FontAwesomeIcon
            icon={faUtensils}
            className="venue-icon"
            aria-label="Breakfast"
          />
        )}
        {meta.pets && (
          <FontAwesomeIcon
            icon={faPaw}
            className="venue-icon"
            aria-label="Pets"
          />
        )}
      </DetailVenueIconsContainer>
      <p className="venue-info">Guests allowed: {maxGuests}</p>
      <p className="venue-info">
        <b>{price} NOK</b> per night
      </p>
      <BookingForm
        maxGuests={maxGuests}
        price={price}
        onDatesChange={{ arrivalDate, departureDate }}
      />
    </DetailVenueContainer>
  );
};

export default VenueDetail;
