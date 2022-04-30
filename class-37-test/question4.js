/**
 * You have added a review system for the rental properties and it is working nicely, but you want to make some adjustments:
 *
 * Some users are verified users and their reviews should always be on top.
 * The rest of the reviews should just be in the same order that they were given.
 *
 * This function handles that, the first parameter is the array of reviews that needs to be reordered.
 *
 * A review has the structure:
 * {
 *  id: <string>,
 *  reviewerId: <string>, // can be used to find
 *  review: <string>
 * }
 *
 * The second parameter is the array of users to check if a user is verified
 * A user has the structure:
 * {
 *  id: <string>
 *  verified: <boolean>
 *  name: <string>
 * }
 *
 * We have provided some comments that gives the steps for one way of solving this problem, but feel free to solve it in your own way
 */
const reorderReviews = (reviews = [], users = []) => {
  // Create a new empty array for verified reviews
  let verifiedUser = [];
  
  // Create a new empty array for unverified reviews
  let unverifiedUser = [];
  // Create a new empty array to list verified user ids
  let verifiedId = [];
  // Go through the users array
  // PER USER:
  // If the user is verified, add the `id` of the user to the verified user ids array
  users.forEach((user) => (user.verified ? verifiedId.push(user.id) : null));
  // Go through the reviews
  // PER REVIEW:
  // If the reviewerId property is in the verified users array, add to the verified reviews
  users.forEach((user) =>
  user.verified
  ? reviews.forEach((review) =>
  review.reviewerId === user.id ? verifiedUser.push(review) : null
  )
  : null
  );
  // Otherwise add the review to the non-verified reviews
  users.forEach((user) =>
  !user.verified
  ? reviews.forEach((review) =>
  review.reviewerId === user.id ? unverifiedUser.push(review) : null
  )
  : null
  );
  console.log(unverifiedUser)
  // return a new array with first the verified reviews and then the non-verified reviews
  return verifiedUser.concat(unverifiedUser);
};

/**
 * TEST CODE. DO NOT EDIT
 */
const testUsers = [
  {
    id: "u---1",
    verified: true,
    name: "Verified user",
  },
  {
    id: "u---2",
    verified: false,
    name: "Unverified user",
  },
];

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
