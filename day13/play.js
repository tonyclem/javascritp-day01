const market = {
  items: ["meat", "rice", "beans", "water"],
  itemIndex: 0,
};

let basket = 0;
while (basket < 2) {
  let superMarket = market.items[market.itemIndex];
  console.log("Welcome we have this in our market!", superMarket);
  if (superMarket === "meat") {
    console.log((market.itemIndex = 0));
  } else if (superMarket === "rice") {
    console.log((market.itemIndex = 2));
  } else if (superMarket === "beans") {
    console.log((market.itemIndex = 3));
  } else if (superMarket === "water") {
    console.log((market.itemIndex = 0));
  }
}
