var calculate = function () {

    if (nullValidation()) {
        scrollToTop();
        return;
    }
    if (valuesValidation()) {
        scrollToTop();
        return;
    }
    var amount = 0;
    var grossWeekPayCap = 538;
    var yearsEmployedCap = 20;
    var yearsWorked = +document.getElementById("Q2").value;
    var weeklyPayGross = +document.getElementById("Q3").value;
    var ageAtRedundancyDateStatutory = +document.getElementById("howOldRedundantQ4").value;
    var ageAtRedundancyDateEnhanced = +document.getElementById("howOldRedundantQ5").value;
    var maxYearsStatWeekCap = +document.getElementById("maxYears").value;
    var weeksPerYearWeekCap = +document.getElementById("weeksPerYear").value;
    var first, second, third;
    if (yearsWorked < 2) {
        resetRecommendations(9);
        return;
    }
    //Statutory and Don't know scheme
    if (Q4) {
        var totalYears = yearsWorked !== 0 && yearsWorked > yearsEmployedCap
            ? yearsEmployedCap
            : yearsWorked;
        var totalPay = weeklyPayGross !== 0 && weeklyPayGross > grossWeekPayCap
            ? grossWeekPayCap
            : weeklyPayGross;
        var ageStartedWorkingStatutory = ageAtRedundancyDateStatutory - totalYears;
        var weeks = 0;
        if (ageStartedWorkingStatutory < 22) {
            //Arange
            if (ageAtRedundancyDateStatutory < 22) {
                weeks = totalYears * 0.5;
            } else if (ageAtRedundancyDateStatutory < 42) {
                weeks = ageAtRedundancyDateStatutory - 22 + (22 - ageStartedWorkingStatutory) * 0.5;
            } //else if (ageAtRedundancyDateStatutory > 42) {
            //    weeks = totalYears * 1.5;
            //}
        } else if (ageStartedWorkingStatutory < 42) {
            //Brange
            if (ageAtRedundancyDateStatutory < 22) {
                //weeks = totalYears * 0.5;
            } else if (ageAtRedundancyDateStatutory < 42) {
                weeks = totalYears;
            } else if (ageAtRedundancyDateStatutory >= 42) {
                weeks = 41 - ageStartedWorkingStatutory + (ageAtRedundancyDateStatutory - 41) * 1.5;
            }
        } else if (ageStartedWorkingStatutory >= 42) {
            //higher than 41
            weeks = totalYears * 1.5;
        }

        amount = totalPay * weeks;
    } else { //Enhanced scheme
        if (Q5) { //No weekly cap
            if (Q5_3) {//don't know
                if (Q6) {
                    totalYears = maxYearsStatWeekCap > 0 && yearsWorked >= maxYearsStatWeekCap
                        ? maxYearsStatWeekCap
                        : yearsWorked > yearsEmployedCap
                            ? yearsEmployedCap
                            : yearsWorked;
                } else {
                    totalYears = yearsWorked !== 0 && yearsWorked > yearsEmployedCap
                        ? yearsEmployedCap
                        : yearsWorked;
                }
                var totalPay = weeklyPayGross !== 0 && weeklyPayGross > grossWeekPayCap
                    ? grossWeekPayCap
                    : weeklyPayGross;

                var ageStartedWorkingStatutory = ageAtRedundancyDateEnhanced - totalYears;

                var weeks = 0;
                if (ageStartedWorkingStatutory < 22) {
                    //Arange
                    if (ageAtRedundancyDateEnhanced < 22) {
                        weeks = totalYears * 0.5;
                    } else if (ageAtRedundancyDateEnhanced < 42) {
                        weeks = ageAtRedundancyDateEnhanced - 22 + (22 - ageStartedWorkingStatutory) * 0.5;
                    } //else if (ageAtRedundancyDateEnhanced > 42) {
                    //    weeks = totalYears * 1.5;
                    //}
                } else if (ageStartedWorkingStatutory < 42) {
                    //Brange
                    if (ageAtRedundancyDateEnhanced < 22) {
                        //weeks = totalYears * 0.5;
                    } else if (ageAtRedundancyDateEnhanced < 42) {
                        weeks = totalYears;
                    } else if (ageAtRedundancyDateEnhanced >= 42) {
                        weeks = 41 - ageStartedWorkingStatutory + (ageAtRedundancyDateEnhanced - 41) * 1.5;
                    }
                } else if (ageStartedWorkingStatutory >= 42 > 0) {
                    //higher than 41
                    weeks = totalYears * 1.5;
                }
                amount = totalPay * weeks;
            } else {
                //statutory formula with no weekpaygrosscap
                //maxYearsStatWeekCap
                var totalYears = 0;
                if (Q6) {
                    totalYears = maxYearsStatWeekCap > 0 && yearsWorked >= maxYearsStatWeekCap
                        ? maxYearsStatWeekCap
                        : yearsWorked > yearsEmployedCap
                            ? yearsEmployedCap
                            : yearsWorked;
                } else {
                    totalYears = yearsWorked !== 0 && yearsWorked > yearsEmployedCap
                        ? yearsEmployedCap
                        : yearsWorked;
                }

                var totalPay = weeklyPayGross;

                var ageStartedWorkingStatutory = ageAtRedundancyDateEnhanced - totalYears;

                var weeks = 0;
                if (ageStartedWorkingStatutory < 22) {
                    //between 18 and 2
                    if (ageAtRedundancyDateEnhanced < 22) {
                        weeks = totalYears * 0.5;
                    } else if (ageAtRedundancyDateEnhanced < 42) {
                        weeks = ageAtRedundancyDateEnhanced - 22 + (22 - ageStartedWorkingStatutory) * 0.5;
                    } //else if (ageAtRedundancyDateEnhanced > 42) {
                    //    weeks = totalYears * 1.5;
                    //}
                } else if (ageStartedWorkingStatutory < 42) {
                    //between 22 and 41
                    if (ageAtRedundancyDateEnhanced < 22) {
                        //weeks = totalYears * 0.5;
                    } else if (ageAtRedundancyDateEnhanced < 42) {
                        weeks = totalYears;
                    } else if (ageAtRedundancyDateEnhanced >= 42) {
                        weeks = 41 - ageStartedWorkingStatutory + (ageAtRedundancyDateEnhanced - 41) * 1.5;
                    }
                } else if (ageStartedWorkingStatutory >= 42 > 0) {
                    //higher than 41
                    weeks = totalYears * 1.5;
                }
                amount = totalPay * weeks;
            }
        } else {//weekly cap
            if (Q6 && maxYearsStatWeekCap > 0) {
                amount = maxYearsStatWeekCap < 21 ? maxYearsStatWeekCap * weeklyPayGross * weeksPerYearWeekCap : 20 * weeklyPayGross * weeksPerYearWeekCap;
            } else {
                amount = yearsWorked < 21 ? yearsWorked * weeklyPayGross * weeksPerYearWeekCap : 20 * weeklyPayGross * weeksPerYearWeekCap;
            }
        }
    }
    if (Q4_1) {
        resetRecommendations(1);
    }
    if (Q4_3) {
        resetRecommendations(4);
    }
    if (Q4_2 && Q5_1 && Q6_1) {
        resetRecommendations(2);
    }
    if ((Q4_2 && Q5_1 && Q6_2) || (Q4_2 && Q5_2 && Q6_2)) {
        resetRecommendations(3);
    }
    if (Q4_2 && Q5_3) {
        resetRecommendations(5);
    }
    if (Q4_2 && Q5_2 && Q6_1) {
        resetRecommendations(6);
    }
    if (Q4_2 && Q5_2 && Q6_3) {
        resetRecommendations(7);
    }
    if ((Q4_2 && Q5_1 && Q6_3) || (Q4_2 && Q5_2 && Q6_3)) {
        resetRecommendations(8);
    }
    if (amount >= 30000) {
        [].forEach.call(document.getElementsByClassName("over30k"), function (e) { e.style.display = "block" });
    } else {
        [].forEach.call(document.getElementsByClassName("over30k"), function (e) { e.style.display = "none" });
    }
    [].forEach.call(document.getElementsByClassName("amount"), function (e) { e.innerHTML = amount.toLocaleString() });
}
