import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditVenueForm from "./EditVenueForm";
import { getVenueById } from "../../venue/getVenueById";

const EditVenuePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    getVenueById(id)
      .then((data) => {
        setVenue(data);
      })
      .catch((error) => {
        console.error("Error fetching venue data:", error);
      });
  }, [id]);

  return (
    <div>
      {venue ? <EditVenueForm initialData={venue} /> : <p>Loading...</p>}
    </div>
  );
};

export default EditVenuePage;
