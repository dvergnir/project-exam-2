import React from "react";
import VenueCard from "./VenueCard";
import { GridContainer } from "../Layout/GridContainer";

export default function VenueList({ venues }) {
  return (
    <GridContainer>
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          imageUrl={venue.media}
          rating={venue.rating}
          name={venue.name}
          city={venue.location.city}
        />
      ))}
    </GridContainer>
  );
}
