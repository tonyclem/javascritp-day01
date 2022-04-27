/**
 * You want to add a new message to show the user how many vacancies are left for a holiday home.
 * The messages are defined in the MESSAGE object below, as well as when to return which one.
 */

const MESSAGE = {
  // If there are 0 vacancies left, return this message
  UNAVAILABLE: "Sorry, all the vacancies have been filled. Try again later",
  // If there is only 1 vacancy left, return this message
  ONLY1LEFT: "Act now! There is only one vacancy left",
  // If there are 2 or 3 vacancies left, return this message (give the amount left (so 2 or 3) to the function)
  ONLYXLEFT: (numberLeft) =>
    `Act quickly! There are only ${numberLeft} vacancies left`,
  // If there is more than 3 left, then return this message
  AVAILABLE: "Book now!",
};

/**
 * Fill in the following function. The function has two parameters:
 *
 * `rental` has the following structure:
 * {
 *  id: <string>,
 *  description: <string>,
 *  totalNumberAvailable: <number>,
 * }
 *
 * `bookings` is an array of objects with the following structure:
 * {
 *  by: <string>,
 *  rentalId: <string>,
 * }
 *
 * Every time a user books a home a new element is added to the bookings array with the id of the rental. This is the way your app tracks who has reserved which rental property.
 *
 * In the function we have written out the steps for you to help you along.
 */
const getVacancyMessage = (rental, bookings = []) => {
  // Get the amount of bookings that are reserved for the rental (rentalId in `booking` object is the same as the id in the `rental` parameter)
  const numberOfBookings = bookings.filter(
    (booking) => booking.rentalId === rental.id
  ).length;
  // Calculate the amount available for this rental (the total number available - the amount that are reserved)
  const amountAvailable = rental.totalNumberAvailable - numberOfBookings;
  // Return the right message using the MESSAGE object
  if (amountAvailable === 0) {
    return MESSAGE.UNAVAILABLE;
  } else if (amountAvailable === 1) {
    return MESSAGE.ONLY1LEFT;
  } else if (amountAvailable === 2 || amountAvailable === 3) {
    return MESSAGE.ONLYXLEFT(amountAvailable);
  }
  return MESSAGE.AVAILABLE;
};

const testRentals = [
  {
    id: "v---1",
    description: "Cozy cottage",
    totalNumberAvailable: 6,
  },
  {
    id: "v---2",
    description: "Luxury apartment",
    totalNumberAvailable: 3,
  },
  {
    id: "v---3",
    description: "Lake house",
    totalNumberAvailable: 1,
  },
  {
    id: "v---4",
    description: "Farm",
    totalNumberAvailable: 1,
  },
];
const testBookings = [
  {
    by: "Rob",
    rentalId: testRentals[0].id,
  },
  {
    by: "Fede",
    rentalId: testRentals[0].id,
  },
  {
    by: "Tjebbe",
    rentalId: testRentals[1].id,
  },
  {
    by: "Wouter",
    rentalId: testRentals[2].id,
  },
];

console.assert(
  getVacancyMessage(testRentals[0], testBookings) === MESSAGE.AVAILABLE,
  "MESSAGE.AVAILABLE message not returned"
);
console.assert(
  getVacancyMessage(testRentals[1], testBookings) === MESSAGE.ONLYXLEFT(2),
  "MESSAGE.ONLYXLEFT message not returned"
);
console.assert(
  getVacancyMessage(testRentals[2], testBookings) === MESSAGE.UNAVAILABLE,
  "MESSAGE.UNAVAILABLE message not returned"
);
console.assert(
  getVacancyMessage(testRentals[3], testBookings) === MESSAGE.ONLY1LEFT,
  "MESSAGE.ONLY1LEFT message not returned"
);
