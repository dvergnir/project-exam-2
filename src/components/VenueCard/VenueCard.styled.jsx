import React from "react";
import styled from "styled-components";

export const VenueCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const VenueImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height for all images */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
`;

export const RatingSquare = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f8c047;
  color: white;
  padding: 5px;
  border-radius: 4px;
`;

export const VenueDescription = styled.p`
  margin: 10px;
  font-size: 16px;
`;

export const ViewMoreButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px;
  font-size: 16px;
`;
