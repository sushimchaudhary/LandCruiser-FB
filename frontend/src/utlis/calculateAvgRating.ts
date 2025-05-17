type Review = {
  rating: number;
  [key: string]: any;
};

const calculateAvgRating = (
  reviews: Review[] = [],
  initialAvgRating = 0
): { avgRating: number; totalRating: number } => {
  let calculatedAvgRating = initialAvgRating;
  let reviewCount = 0;

  if (Array.isArray(reviews)) {
    const totalRating = reviews.reduce((acc, item) => acc + (item?.rating || 0), 0);
    calculatedAvgRating =
      reviews.length > 0 ? parseFloat((totalRating / reviews.length).toFixed(1)) : 0;
    reviewCount = reviews.length;

    return {
      avgRating: calculatedAvgRating,
      totalRating: reviewCount,
    };
  }

  return {
    avgRating: initialAvgRating,
    totalRating: 0,
  };
};

export default calculateAvgRating;
