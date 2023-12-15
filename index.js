// Code your solution in this file!
returnFirstTwoDrivers
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => (fare) => fare * multiplier;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = (drivers, selectFunction) =>
  selectFunction ? selectFunction(drivers) : [];

const allDrivers = ["Antonio", "Nuru", "Amari", "Mo"];

const firstTwo = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers); // ["Antonio", "Nuru"]
const lastTwo = selectDifferentDrivers(allDrivers, returnLastTwoDrivers); // ["Amari", "Mo"]

const doubledFare = fareDoubler(10); 
const tripledFare = fareTripler(5);

console.log("First two drivers:", firstTwo);
console.log("Last two drivers:", lastTwo);
console.log("Doubled fare:", doubledFare);
console.log("Tripled fare:", tripledFare);
