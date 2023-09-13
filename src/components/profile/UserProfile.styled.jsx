import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  justify-content: start;
  padding: 20px;
`;

export const StyledAvatar = styled.img`
  width: 100%;
  max-width: 100px;
  object-fit: cover;
  padding: 20px 10px 0px 0px;
`;

export const UploadAvatarStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

export const AvatarFormStyle = styled.form`
  input {
    padding: 8px;
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

export const StyledLogoutBtn = styled.button`
  display: block;
  width: 100%;
  max-width: 100px;
  margin: 50px auto 0px;
  background-color: var(--tertiary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  font-size: 16px;

  &:hover {
    box-shadow: 0 0 10px var(--tertiary-color);
  }
`;
