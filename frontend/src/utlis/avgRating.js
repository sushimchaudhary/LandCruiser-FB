// src/utils/calculateAvgRating.js

const calculateAvgRating = (reviews, initialAvgRating = 0) => {
    // Initialize the calculated average rating with the provided initial value.
    let calculatedAvgRating = initialAvgRating;
    // Initialize the review count.
    let reviewCount = 0;
  
    // Check if the 'reviews' input is an array (of review objects).
    if (Array.isArray(reviews)) {
      // Calculate the total rating by summing up the 'rating' property of each review.
      // Use optional chaining (?.) to safely access the 'rating' property, and default to 0 if it's missing.
      const totalRating = reviews?.reduce((acc, item) => acc + (item?.rating || 0), 0);
  
      // Calculate the average rating if there are reviews. Round to one decimal place.
      calculatedAvgRating =
        reviews.length > 0 ? parseFloat((totalRating / reviews.length).toFixed(1)) : 0;
  
      // Set the review count to the number of reviews in the array.
      reviewCount = reviews.length;
    } else if (typeof reviews === 'number') {
      // If 'reviews' is a number, assume it's the count of reviews.
      reviewCount = reviews;
    }
  
    // Return the calculated average rating if it's greater than 0 (meaning there were ratings to calculate from).
    // Otherwise, return the initial average rating provided (which might be a pre-calculated value from the data).
    return calculatedAvgRating > 0 ? calculatedAvgRating : initialAvgRating;
  };
  
  export default calculateAvgRating;