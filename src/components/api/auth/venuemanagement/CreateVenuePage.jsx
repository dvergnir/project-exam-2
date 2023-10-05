import React, { useState } from "react";
import CreateVenueForm from "./CreateVenueForm";
import createVenueApi from "./createVenueApi";
import VenueCreationSuccess from "./VenueCreationSuccess";

const CreateVenuePage = () => {
  const [apiError, setApiError] = useState(null);
  const [venueCreated, setVenueCreated] = useState(false);
  const [createdVenueInfo, setCreatedVenueInfo] = useState(null);

  const onSubmit = async (formData) => {
    formData.price = parseFloat(formData.price);
    formData.maxGuests = parseInt(formData.maxGuests);
    formData.rating = parseInt(formData.rating);

    try {
      const response = await createVenueApi(formData);

      if (response) {
        console.log("Venue created successfully:", response);
        setApiError(null);
        setVenueCreated(true);
        setCreatedVenueInfo(response);
      } else {
        console.error("Failed to create venue");
        setApiError("Failed to create venue. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred while creating venue:", error);
      setApiError("An error occurred while creating the venue.");
    }
  };

  return (
    <div>
      {!venueCreated && (
        <div>
          <CreateVenueForm onSubmit={onSubmit} />
          {apiError && <div className="error-message">{apiError}</div>}
        </div>
      )}
      {venueCreated && <VenueCreationSuccess venueInfo={createdVenueInfo} />}
    </div>
  );
};

export default CreateVenuePage;
