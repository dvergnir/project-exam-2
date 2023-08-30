import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/getVenues";
import VenueList from "./VenueList";
import { SearchBar } from "../SearchBar/SearchBar";

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

    const filteredVenues = data.filter((venue) =>
      venue.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredVenues);
  };

  return (
    <div>
      <SearchBar venues={data} onSearch={handleSearch} />
      <VenueList venues={filteredData} />
    </div>
  );
}
