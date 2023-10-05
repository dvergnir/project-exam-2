import { useForm, Controller } from "react-hook-form";
import FormInput from "../../../form/FormInput";
import CheckboxInput from "../../../form/CheckboxInput";
import { FormStyle } from "../../../form/FormStyle.styled";
import { CtaStyledButton } from "../../../utils/StyledButton.styled";
import { StyledErrorMessage } from "../../../utils/ErrorMessage.styled";
import {
  StyledAccommodationItem,
  StyledAccommodationsWrapper,
} from "./CreateVenueForm.styled";
import { updateVenueApi } from "./updateVenueApi";

const EditVenueForm = ({ initialData, onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  const handleUpdateVenue = async (formData) => {
    formData.price = parseFloat(formData.price);
    formData.maxGuests = parseInt(formData.maxGuests);
    formData.rating = parseInt(formData.rating);

    try {
      const accessToken = localStorage.getItem("accessToken");
      const success = await updateVenueApi(
        accessToken,
        initialData.id,
        formData
      );

      if (success) {
        console.log("Venue updated successfully");
        onSubmit();
      } else {
        console.error("Failed to update venue");
      }
    } catch (error) {
      console.error("Error occurred while updating venue:", error);
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit(handleUpdateVenue)}>
      <div>
        {" "}
        <section>
          <h2>Basic Information</h2>
          <div className="form-group">
            <label htmlFor="name">Venue name</label>
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Name is required",
              }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    id="name"
                    {...field}
                    error={
                      errors.name && (
                        <StyledErrorMessage>
                          {errors.name.message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Controller
              name="description"
              control={control}
              rules={{
                required: "Description is required",
              }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    id="description"
                    {...field}
                    error={
                      errors.description && (
                        <StyledErrorMessage>
                          {errors.description.message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
        </section>
        <section>
          <h2>Location</h2>
          <div className="form-group">
            <label htmlFor="location.address">Address</label>
            <Controller
              name="location.address"
              control={control}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    id="location.address"
                    {...field}
                    error={
                      errors["location.address"] && (
                        <StyledErrorMessage>
                          {errors["location.address"].message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location.city">City</label>
            <Controller
              name="location.city"
              control={control}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    id="location.city"
                    {...field}
                    error={
                      errors["location.city"] && (
                        <StyledErrorMessage>
                          {errors["location.city"].message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location.zip">ZIP Code</label>
            <Controller
              name="location.zip"
              control={control}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    id="location.zip"
                    {...field}
                    error={
                      errors["location.zip"] && (
                        <StyledErrorMessage>
                          {errors["location.zip"].message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location.country">Country</label>
            <Controller
              name="location.country"
              control={control}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    id="location.country"
                    {...field}
                    error={
                      errors["location.country"] && (
                        <StyledErrorMessage>
                          {errors["location.country"].message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
        </section>
        <section>
          <h2>Media</h2>
          <div className="form-group">
            <label htmlFor="media">Images (comma-separated URLs)</label>
            <Controller
              name="media"
              control={control}
              render={({ field }) => (
                <div>
                  <FormInput type="text" id="media" {...field} />
                </div>
              )}
            />
          </div>
        </section>
        <section>
          <h2>Pricing and Guest Information</h2>
          <div className="form-group">
            <label htmlFor="price">Price per night</label>
            <Controller
              name="price"
              control={control}
              rules={{
                required: "Price is required",
                min: 1,
              }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="number"
                    id="price"
                    {...field}
                    error={
                      errors.price && (
                        <StyledErrorMessage>
                          {errors.price.message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxGuests">Maximum Guests</label>
            <Controller
              name="maxGuests"
              control={control}
              rules={{
                required: "Maximum guests is required",
                min: 1,
              }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="number"
                    id="maxGuests"
                    {...field}
                    error={
                      errors.maxGuests && (
                        <StyledErrorMessage>
                          {errors.maxGuests.message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <div>
                  <FormInput type="number" id="rating" {...field} />
                </div>
              )}
            />
          </div>
        </section>
        <StyledAccommodationsWrapper>
          <h2>Accommodations</h2>
          <div className="form-group">
            <StyledAccommodationItem>
              <label htmlFor="meta.wifi">Wi-Fi</label>
              <Controller
                name="meta.wifi"
                control={control}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="wifi" {...field} />
                  </div>
                )}
              />
            </StyledAccommodationItem>
          </div>
          <div className="form-group">
            <StyledAccommodationItem>
              <label htmlFor="meta.parking">Parking</label>
              <Controller
                name="meta.parking"
                control={control}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="parking" {...field} />
                  </div>
                )}
              />
            </StyledAccommodationItem>
          </div>
          <div className="form-group">
            <StyledAccommodationItem>
              <label htmlFor="meta.breakfast">Breakfast</label>
              <Controller
                name="meta.breakfast"
                control={control}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="breakfast" {...field} />
                  </div>
                )}
              />
            </StyledAccommodationItem>
          </div>
          <div className="form-group">
            <StyledAccommodationItem>
              <label htmlFor="meta.pets">Pets Allowed</label>
              <Controller
                name="meta.pets"
                control={control}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="pets" {...field} />
                  </div>
                )}
              />
            </StyledAccommodationItem>
          </div>
        </StyledAccommodationsWrapper>
      </div>
      <CtaStyledButton type="submit">Update Venue</CtaStyledButton>
    </FormStyle>
  );
};

export default EditVenueForm;
