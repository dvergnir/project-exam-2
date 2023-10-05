import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditVenueForm from "./EditVenueForm";
import { getVenueById } from "../../venue/getVenueById";
import LoadingSpinner from "../../../utils/LoadingSpinner";
import { StyledErrorMessage } from "../../../utils/ErrorMessage.styled";
import VenueUpdateSuccess from "./VenueUpdateSuccess";
const EditVenuePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    getVenueById(id)
      .then((data) => {
        setVenue(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching venue data:", error);
        setIsLoading(false);
      });
  }, [id]);

  const handleUpdateSuccess = () => {
    setShowSuccessMessage(true);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : showSuccessMessage ? (
        <VenueUpdateSuccess />
      ) : venue ? (
        <EditVenueForm initialData={venue} onSubmit={handleUpdateSuccess} />
      ) : (
        <StyledErrorMessage>Error loading venue data.</StyledErrorMessage>
      )}
    </div>
  );
};

export default EditVenuePage;
