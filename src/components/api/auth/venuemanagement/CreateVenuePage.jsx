import CreateVenueForm from "./CreateVenueForm";
import createVenueApi from "./createVenueApi";

const CreateVenuePage = () => {
  const onSubmit = async (formData) => {
    formData.price = parseFloat(formData.price);
    formData.maxGuests = parseInt(formData.maxGuests);
    formData.rating = parseInt(formData.rating);

    const response = await createVenueApi(formData);

    // Handle the response or errors here
    if (response) {
      // Handle success, e.g., redirect or display a success message
      console.log("Venue created successfully:", response);
    } else {
      // Handle error, e.g., display an error message to the user
      console.error("Failed to create venue");
    }
  };

  return (
    <div>
      <CreateVenueForm onSubmit={onSubmit} /> {/* Render the CreateVenueForm */}
    </div>
  );
};

export default CreateVenuePage;
