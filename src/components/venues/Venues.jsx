import React, { useState, useEffect } from "react";
import { fetchData } from "../api/venue/getVenues";
import VenueList from "./VenueList";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomeH1Container } from "./Venues.Styled";
import { StyledButton } from "../utils/StyledButton.styled";
import LoadingSpinner from "../utils/LoadingSpinner";

export default function Venues() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleListings, setVisibleListings] = useState(12);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        setFilteredData(fetchedData);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setErrorMessage(
          "An error occurred while fetching data. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const lowerSearchTerm = searchTerm.toLowerCase();
    const filteredVenues = data.filter((venue) => {
      const nameMatches = venue.name.toLowerCase().includes(lowerSearchTerm);
      const locationMatches = venue.location.city
        .toLowerCase()
        .includes(lowerSearchTerm);
      return nameMatches || locationMatches;
    });

    setFilteredData(filteredVenues);
  };

  const loadMore = () => {
    const newVisibleListings = visibleListings + 12;
    setVisibleListings(newVisibleListings);
  };

  const displayedVenues = filteredData.slice(0, visibleListings);

  return (
    <div>
      <HomeH1Container>
        <h1>Find Your Next Adventure</h1>
        <SearchBar onSearch={handleSearch} />
      </HomeH1Container>

      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        <>
          <VenueList venues={displayedVenues} />
          {visibleListings < filteredData.length && (
            <StyledButton onClick={loadMore}>Load More</StyledButton>
          )}
        </>
      )}
    </div>
  );
}
