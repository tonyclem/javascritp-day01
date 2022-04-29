const reorderReviews = (reviews = [], users = []) => {
  const verifiedReviews = [];
  const unverifiedReviews = [];
  const verifiedUserIds = [];
  users.forEach((user) => {
    if (user.verified) {
      verifiedUserIds.push(user.id);
    }
  });
  reviews.forEach((review) => {
    if (verifiedUserIds.includes(review.reviewerId)) {
      verifiedReviews.push(review);
    } else {
      unverifiedReviews.push(review);
    }
  });
  return [...verifiedReviews, ...unverifiedReviews];
};

const testReviews = [
  {
    id: "r---1",
    reviewerId: testUsers[1].id,
    review: "Really good product",
  },
  {
    id: "r---2",
    reviewerId: testUsers[0].id,
    review: "Quite good, but could use some improvements",
  },
  {
    id: "r---3",
    reviewerId: testUsers[1].id,
    review: "Not great, broke 1 month in",
  },
  {
    id: "r---4",
    reviewerId: testUsers[0].id,
    review: "Really useful product",
  },
];
const testResult = reorderReviews(testReviews, testUsers);
console.assert(testResult[0].id === "r---2");
console.assert(testResult[1].id === "r---4");
console.assert(testResult[2].id === "r---1");
console.assert(testResult[3].id === "r---3");