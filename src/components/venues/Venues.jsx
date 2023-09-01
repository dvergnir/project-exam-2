import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/getVenues";
import VenueList from "./VenueList";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomeH1Container } from "./Venues.Styled";

export default function Venues() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        console.log(error);
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

  return (
    <div>
      <HomeH1Container>
        <h1>Find Your Next Adventure</h1>
        <SearchBar onSearch={handleSearch} />
      </HomeH1Container>
      <VenueList venues={filteredData} />
    </div>
  );
}
