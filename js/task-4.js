function getShippingCost(country) {
 switch (country) {
  case "Australia":
   return ("Shipping to Australia will cost 170 credits");
  case "China":
   return ("Shipping to China will cost 100 credits");
  case "Chile":
   return ("Shipping to Chile will cost 250 credits");
  case "Jamaica":
   return ("Shipping to Jamaica will cost 120 credits");
  default:
   return ("Sorry, there is no delivery to your country");
 }
}

getShippingCost("Australia"); // "Shipping to Australia will cost 170 credits"
getShippingCost("Germany"); // "Sorry, there is no delivery to your country"
getShippingCost("China"); // "Shipping to China will cost 100 credits"
getShippingCost("Chile"); // "Shipping to Chile will cost 250 credits"
getShippingCost("Jamaica"); // "Shipping to Jamaica will cost 120 credits"
getShippingCost("Sweden"); // "Sorry, there is no delivery to your country"
