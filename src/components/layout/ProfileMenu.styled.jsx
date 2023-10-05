import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 2px solid var(--secondary-color);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const MenuItem = styled.li`
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 8px 16px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;
