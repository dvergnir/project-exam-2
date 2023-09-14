import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../api/venue/getVenueById";
import {
  DetailVenueContainer,
  ImageAndRatingContainer,
  DetailVenueImage,
  DetailVenueIconsContainer,
  StyledCarouselButton,
  StyledCarouselButtonContainer,
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
import { MainContainer } from "../layout/Main.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const placeHolderImageUrl = "https://placehold.co/600x400/png";

const VenueDetail = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState([]);
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageError = (e) => {
    e.target.src = placeHolderImageUrl;
  };

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  useEffect(() => {
    const fetchVenue = async () => {
      const venueData = await getVenueById(id);
      const venueImages = venueData.media;

      setImageUrl(venueImages);
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

  const accessToken = localStorage.getItem("accessToken");

  // Function to handle clicking the "Previous" button
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <MainContainer>
      <DetailVenueContainer>
        <h1>{name}</h1>
        <h2>{city}</h2>
        <ImageAndRatingContainer>
          <Slider {...slickSettings}>
            {imageUrl.map((image, index) => (
              <div key={index}>
                <DetailVenueImage
                  src={image}
                  alt={`Venue Image ${index}`}
                  onError={handleImageError}
                />
              </div>
            ))}
          </Slider>
          <RatingSquare>{rating}/5</RatingSquare>
        </ImageAndRatingContainer>
        <p className="venue-description">{description}</p>
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
        {accessToken ? (
          <BookingForm
            maxGuests={maxGuests}
            price={price}
            onDatesChange={{ arrivalDate, departureDate }}
          />
        ) : (
          <p className="booking-msg">Please log in to book the venue.</p>
        )}
      </DetailVenueContainer>
    </MainContainer>
  );
};

export default VenueDetail;
