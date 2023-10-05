import VenueCard from "./VenueCard";
import { GridContainer } from "../layout/GridContainer";

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
          id={venue.id}
        />
      ))}
    </GridContainer>
  );
}
