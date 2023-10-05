import { useState, useEffect } from "react";
import { fetchVenuesByOwner } from "../../api/venue/fetchVenuesByOwner";
import VenueItem from "./VenueItem";
import { BookingHistoryContainer } from "../bookings/BookingHistory.styled";
import LoadingSpinner from "../../utils/LoadingSpinner";

const UserVenueList = () => {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      setError("No access token found.");
      setIsLoading(false);
      return;
    }

    fetchVenues();
  }, [token]);

  const fetchVenues = async () => {
    try {
      const data = await fetchVenuesByOwner(token);
      setVenues(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteVenue = (venueId) => {
    window.location.reload();
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div>
      <ul>
        {venues.map((venue) => (
          <BookingHistoryContainer key={venue.id}>
            <VenueItem venue={venue} onDelete={handleDeleteVenue} />
          </BookingHistoryContainer>
        ))}
      </ul>
    </div>
  );
};

export default UserVenueList;
