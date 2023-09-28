import React from "react";
import { useForm, Controller } from "react-hook-form";
import { AvatarFormStyle, UploadAvatarStyle } from "./UserProfile.styled";
import { StyledButton } from "../utils/StyledButton.styled";

const AvatarForm = ({ onSubmit }) => {
  const { handleSubmit, control, reset, formState } = useForm();

  return (
    <AvatarFormStyle onSubmit={handleSubmit(onSubmit)}>
      <UploadAvatarStyle className="update-avatar-form">
        <Controller
          name="newAvatarUrl"
          control={control}
          defaultValue=""
          rules={{
            required: "New Avatar URL is required",
            pattern: {
              value: /^https?:\/\/.*/,
              message: "Invalid URL format",
            },
          }}
          render={({ field }) => (
            <>
              <input
                type="text"
                placeholder="Enter New Avatar URL"
                {...field}
              />
              {formState.errors.newAvatarUrl && (
                <p className="error-message">
                  {formState.errors.newAvatarUrl.message}
                </p>
              )}
            </>
          )}
        />
        <StyledButton type="submit">Update Avatar</StyledButton>
      </UploadAvatarStyle>
    </AvatarFormStyle>
  );
};

export default AvatarForm;
