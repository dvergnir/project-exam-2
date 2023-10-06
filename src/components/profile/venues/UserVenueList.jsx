import { useState, useEffect } from "react";
import { fetchVenuesByOwner } from "../../api/venue/fetchVenuesByOwner";
import VenueItem from "./VenueItem";
import { BookingsContainer } from "./UserVenue.styled";
import LoadingSpinner from "../../utils/LoadingSpinner";

const UserVenueList = () => {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      // Adds a delay to prevent error to display before content is loaded from API.
      setTimeout(() => {
        const updatedToken = localStorage.getItem("accessToken");
        if (updatedToken) {
          fetchVenuesWithToken(updatedToken);
        } else {
          setError("No access token found.");
          setIsLoading(false);
        }
      }, 3000);
    } else {
      fetchVenuesWithToken(token);
    }
  }, [token]);

  const fetchVenuesWithToken = async () => {
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
          <BookingsContainer key={venue.id}>
            <VenueItem venue={venue} onDelete={handleDeleteVenue} />
          </BookingsContainer>
        ))}
      </ul>
    </div>
  );
};

export default UserVenueList;
