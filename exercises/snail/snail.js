var triesToClimb = 7;
var slide = 2;

var climbPerDay = triesToClimb - slide;

var daysCount = 0;

const climb = (stepsToClimb) => {

    for (step = triesToClimb, days = 1; step < stepsToClimb; step += triesToClimb, days++) {
        step -= slide;
    }

    return days;
}

exports.climb = climb;