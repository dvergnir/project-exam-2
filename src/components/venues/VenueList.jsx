import VenueCard from "./VenueCard";
import { GridContainer } from "../layout/GridContainer";

export default function VenueList({ venues }) {
  return (
    <GridContainer>
      {venues.map((venue) => {
        const imageUrl =
          Array.isArray(venue.media) && venue.media.length > 0
            ? venue.media[0]
            : "https://placehold.co/600x400.png";

        return (
          <VenueCard
            key={venue.id}
            imageUrl={imageUrl}
            rating={venue.rating}
            name={venue.name}
            city={venue.location.city}
            id={venue.id}
          />
        );
      })}
    </GridContainer>
  );
}
