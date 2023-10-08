import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
import BookingForm from "../booking/BookingForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchBookedDates } from "../api/auth/booking/fetchBookedDates";
import BookingConfirmation from "../booking/BookingConfirmation";
import LoadingSpinner from "../utils/LoadingSpinner";

const placeHolderImageUrl = "https://placehold.co/600x400/png";

const VenueDetail = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState([]);
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [meta, setMeta] = useState({
    wifi: true,
    parking: true,
    breakfast: false,
    pets: true,
  });
  const [maxGuests, setMaxGuests] = useState(1);
  const [bookingInfo, setBookingInfo] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingError, setBookingError] = useState(false);
  const [bookingErrorMessage, setBookingErrorMessage] = useState("");

  const handleImageError = (e) => {
    e.target.src = placeHolderImageUrl;
    e.target.onerror = null;
  };

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const venueData = await getVenueById(id);
        const venueImages = venueData.media;

        setImageUrl(venueImages);
        setRating(venueData.rating);
        setName(venueData.name);
        setCity(venueData.location.city);
        setAddress(venueData.location.address);
        setDescription(venueData.description);
        setPrice(venueData.price);
        setMeta(venueData.meta);
        setMaxGuests(venueData.maxGuests);
        const bookedDatesData = await fetchBookedDates(id);
        setBookedDates(bookedDatesData);
      } catch (error) {
        setError(true);
        setErrorMessage(
          "An error occurred while fetching venue details. Please try again later."
        );
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  const accessToken = localStorage.getItem("accessToken");

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const disabledDates = bookedDates.map(
    (booking) => new Date(booking.dateFrom)
  );

  const handleBookingSuccess = (bookingData) => {
    setBookingInfo(bookingData);
    setBookingError(false);
    setBookingErrorMessage("");
  };

  const handleBookingError = (error) => {
    setBookingError(true);
    setBookingErrorMessage(
      "An error occurred while booking. Please try again later."
    );
  };

  const formattedPrice = price.toLocaleString("nb-NO");

  return (
    <DetailVenueContainer>
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <div>{errorMessage}</div>
      ) : bookingError ? (
        <div>{bookingErrorMessage}</div>
      ) : bookingInfo ? (
        <>
          <h1>{name}</h1>
          {city && <h2>{city}</h2>}
          <ImageAndRatingContainer>
            <Slider {...slickSettings}>
              {imageUrl.length === 0 ? (
                <div>
                  <DetailVenueImage
                    src={placeHolderImageUrl}
                    alt={`Venue Placeholder Image`}
                  />
                </div>
              ) : (
                imageUrl.map((image, index) => (
                  <div key={index}>
                    <DetailVenueImage
                      src={image}
                      alt={`Venue Image ${index}`}
                      onError={handleImageError}
                    />
                  </div>
                ))
              )}
            </Slider>
            <RatingSquare>{rating}/5</RatingSquare>
          </ImageAndRatingContainer>
          <BookingConfirmation bookingInfo={bookingInfo} />
        </>
      ) : (
        <>
          <h1>{name}</h1>
          <h2>{city}</h2>
          <ImageAndRatingContainer>
            <Slider {...slickSettings}>
              {imageUrl.length === 0 ? (
                <div>
                  <DetailVenueImage
                    src={placeHolderImageUrl}
                    alt={`Venue Placeholder Image`}
                  />
                </div>
              ) : (
                imageUrl.map((image, index) => (
                  <div key={index}>
                    <DetailVenueImage
                      src={image}
                      alt={`Venue Image ${index}`}
                      onError={handleImageError}
                    />
                  </div>
                ))
              )}
            </Slider>
            <RatingSquare>{rating}/5</RatingSquare>
          </ImageAndRatingContainer>
          <div className="venue-description">
            {address && <h3>Address: {address}</h3>}
            <p>{description}</p>
          </div>
          <h3>Facilities</h3>
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
            <b>{formattedPrice} NOK</b> per night
          </p>
          {accessToken ? (
            <BookingForm
              maxGuests={maxGuests}
              price={price}
              onDatesChange={{ arrivalDate, departureDate }}
              bookedDates={bookedDates}
              venueId={id}
              onBookingSuccess={handleBookingSuccess}
              onBookingError={handleBookingError}
            />
          ) : (
            <Link to="/login">
              <p className="booking-msg">Please log in to book the venue.</p>
            </Link>
          )}
        </>
      )}
    </DetailVenueContainer>
  );
};

export default VenueDetail;
