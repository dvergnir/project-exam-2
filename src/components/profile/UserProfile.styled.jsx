import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
`;

export const StyledAvatar = styled.img`
  width: 100%;
  max-width: 100px;
  object-fit: cover;
  padding: 20px 10px 0px 0px;
  border-radius: 50%;
`;

export const UploadAvatarStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

export const AvatarFormStyle = styled.form`
  input {
    margin: 0 auto;
    width: 100%;
    max-width: 260px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-shadow: inset 0 0 5px var(--tertiary-color);
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      border-color: var(--secondary-color);
    }
  }
`;

export const StyledProfileMenu = styled.div`
  text-align: left;
  margin-left: 20px;
`;

export const UserProfileSection = styled.div`
  display: flex;
  justify-content: center;
`;
