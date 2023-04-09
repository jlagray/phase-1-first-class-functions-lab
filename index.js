// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers)  {
    return (drivers.slice(0, 2))
}
const returnLastTwoDrivers = function(drivers)  {
    return (drivers.slice(2, 5))
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n)  {
    return function(fare) {
        return fare * n
    }
}
function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2
}
function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3
}
function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}
