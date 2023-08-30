import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVenueById } from "../../utils/getVenueById";

const ProductDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchVenue = async () => {
      const venueData = await getVenueById(id);
      setProduct(venueData);
    };

    fetchVenue();
  }, [id]);
};

if (!venue) {
  return <LoadingIndicator>Loading...</LoadingIndicator>;
}

return (
  <VenueDetailContainer>
    <div className="venue-detail">
      <h2>{venue.title}</h2>
      <img src={venue.imageUrl} className="detail-image" alt={venue.title} />
      <p>{venue.description}</p>
      {venue.reviews && venue.reviews.length > 0 ? (
        <div className="review-container">
          <h3>Reviews:</h3>
          {venue.reviews.map((review, index) => (
            <div key={index}>
              <p>
                {review.username}: {review.description}{" "}
                <b>({review.rating}/5)</b>
              </p>
            </div>
          ))}
        </div>
      ) : null}
      <StyledButton onClick={handleAddToCart}>Add to Cart</StyledButton>
    </div>
  </VenueDetailContainer>
);

export default ProductDetail;
