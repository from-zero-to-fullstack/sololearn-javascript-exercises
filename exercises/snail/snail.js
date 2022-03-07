const climb = (stepsToClimb) => {

    var climbStepsPerDay = 7;
    var slideStepsPerDay = 2;
    var daysCount = 0;

    for (step = 0; step <= stepsToClimb;) {

        step += climbStepsPerDay
        daysCount++;

        if (step >= stepsToClimb) {
            break;
        }

        step -= slideStepsPerDay;
    }

    return daysCount;
}

exports.climb = climb;