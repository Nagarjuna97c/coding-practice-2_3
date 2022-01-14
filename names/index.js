const people = require("../country/state/city/index");
const firstNames = require("../utilities/utils/index");

const getPeopleInCity = (people) => {
  return firstNames(people);
};

module.exports = getPeopleInCity;
