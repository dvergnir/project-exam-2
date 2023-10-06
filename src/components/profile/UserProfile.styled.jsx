import styled from "styled-components";

const desktopBreakpoint = "999px";
const tabletBreakpoint = "499px";

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 450px;
    flex-direction: row;
    margin-bottom: 50px;
  }

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 800px;
  }
`;

export const StyledAvatar = styled.img`
  width: 100%;
  max-width: 100px;
  object-fit: cover;
  padding: 20px 10px 0px 0px;
  border-radius: 50%;

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 200px;
    text-align: center;
    font-size: 1.2em;
  }

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 300px;
    text-align: left;
    font-size: 1.2em;
  }
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

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 450px;
    margin: 0 auto;

    input {
      max-width: 450px;
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

  @media (min-width: ${tabletBreakpoint}) {
    max-width: 450px;
    flex-direction: column;
    margin-bottom: 50px;
  }

  @media (min-width: ${desktopBreakpoint}) {
    max-width: 800px;
  }
`;
