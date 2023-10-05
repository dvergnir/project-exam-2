import React from "react";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../../form/FormInput";
import CheckboxInput from "../../../form/CheckboxInput";
import {
  FormStyle,
  StyledCheckboxWrapper,
  StyledCheckboxItem,
} from "../../../form/FormStyle.styled";
import { CtaStyledButton } from "../../../utils/StyledButton.styled";
import { StyledErrorMessage } from "../../../utils/ErrorMessage.styled";

const CreateVenueForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <div>
        {" "}
        <section>
          <h2>Basic Information</h2>
          <div className="form-group">
            <label htmlFor="name">Venue name</label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
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
              defaultValue=""
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
            <div className="form-group">
              <label htmlFor="location.address">Address</label>
              <Controller
                name="location.address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      id="location.address"
                      {...field}
                      error={
                        errors.address && (
                          <StyledErrorMessage>
                            {errors.address.message}
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
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      id="location.city"
                      {...field}
                      error={
                        errors.city && (
                          <StyledErrorMessage>
                            {errors.city.message}
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
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      id="location.zip"
                      {...field}
                      error={
                        errors.zip && (
                          <StyledErrorMessage>
                            {errors.zip.message}
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
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      id="location.country"
                      {...field}
                      error={
                        errors.country && (
                          <StyledErrorMessage>
                            {errors.country.message}
                          </StyledErrorMessage>
                        )
                      }
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </section>
        <section>
          <h2>Media</h2>
          <div className="form-group">
            <label htmlFor="media">Images (comma-separated URLs)</label>
            <Controller
              name="media"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    id="media"
                    {...field}
                    title="Separate URLs with a comma"
                  />
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
              defaultValue={1}
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
            <label htmlFor="maxGuests">Guests (Max: 100)</label>
            <Controller
              name="maxGuests"
              control={control}
              defaultValue={1}
              rules={{
                required: "Maximum guests is required",
                min: 1,
                max: 100,
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
            <label htmlFor="rating">Rating (out of 5)</label>
            <Controller
              name="rating"
              control={control}
              defaultValue={0}
              rules={{
                min: 0,
                max: {
                  value: 5,
                  message: "Rating must be less than or equal to 5",
                },
              }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="number"
                    id="rating"
                    {...field}
                    error={
                      errors.rating && (
                        <StyledErrorMessage>
                          {errors.rating.message}
                        </StyledErrorMessage>
                      )
                    }
                  />
                </div>
              )}
            />
          </div>
        </section>
        <StyledCheckboxWrapper>
          <h2>Accommodations</h2>
          <div className="form-group">
            <StyledCheckboxItem>
              <label htmlFor="wifi">Wi-Fi</label>
              <Controller
                name="meta.wifi"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="wifi" {...field} />
                  </div>
                )}
              />
            </StyledCheckboxItem>
          </div>
          <div className="form-group">
            <StyledCheckboxItem>
              <label htmlFor="parking">Parking</label>
              <Controller
                name="meta.parking"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="parking" {...field} />
                  </div>
                )}
              />
            </StyledCheckboxItem>
          </div>
          <div className="form-group">
            <StyledCheckboxItem>
              <label htmlFor="breakfast">Breakfast</label>
              <Controller
                name="meta.breakfast"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="breakfast" {...field} />
                  </div>
                )}
              />
            </StyledCheckboxItem>
          </div>
          <div className="form-group">
            <StyledCheckboxItem>
              <label htmlFor="pets">Pets Allowed</label>
              <Controller
                name="meta.pets"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <div>
                    <CheckboxInput id="pets" {...field} />
                  </div>
                )}
              />
            </StyledCheckboxItem>
          </div>
        </StyledCheckboxWrapper>
      </div>
      <CtaStyledButton type="submit">Create Venue</CtaStyledButton>
    </FormStyle>
  );
};

export default CreateVenueForm;
