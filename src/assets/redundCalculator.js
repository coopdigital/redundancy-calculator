var Q1, Q2, Q3, Q4, Q5, Q6;
var Q4_1, Q4_2, Q4_3;
var Q5_1, Q5_2, Q5_3;
var Q6_1, Q6_2, Q6_3;
var resetRecommendations = function (number) {
    for (var i = 1; i < 10; i++) {
        if (i === number) { continue; }
        document.getElementById("recommendation" + i).style.display = "none";
    }
    document.getElementById("recommendation" + number).style.display = "block";
}

var date = new Date();

//var days90 = date.setDate(date.getDate() + 90);
//var years4 = date.setDate(date.getDate() - 1460);
if ($('#Q1')[0].type !== 'date') {
    $('#Q1').datepicker({
        dateFormat: 'dd/mm/yy'
    });
}
var nullValidation = function () {
    var invalid = false;
    if (typeof Q1 === 'undefined' && document.getElementById("Q1").value === "") {
        $("#error-Q1").css("border-color", "#282828");
        $("#error-Q1").html("Please answer this question");
        $("#error-Q1").show();
        invalid = true;
    } else {
        $("#error-Q1").hide();
    }

    if (typeof Q2 === 'undefined' && document.getElementById("Q2").value === "") {
        $("#error-Q2").css("border-color", "#282828");
        $("#error-Q2").html("Please answer this question");
        $("#error-Q2").show();
        invalid = true;
    } else {
        $("#error-Q2").hide();
    }
    if (typeof Q3 === 'undefined' && document.getElementById("Q3").value === "") {
        $("#error-Q3").css("border-color", "#282828");
        $("#error-Q3").html("Please answer this question");
        $("#error-Q3").show();
        invalid = true;
    } else {
        $("#error-Q3").hide();
    }
    if (typeof Q4 === 'undefined') {
        $("#error-Q4").css("border-color", "#282828");
        $("#error-Q4").html("Please answer this question");
        $("#error-Q4").show();
        invalid = true;
    } else {
        $("#error-Q4").hide();
    }
    if (typeof Q4 !== 'undefined' && Q4 && document.getElementById("howOldRedundantQ4").value === "") {
        $("#error-howOldRedundantQ4").css("border-color", "#282828");
        $("#error-howOldRedundantQ4").html("Please answer this question");
        $("#error-howOldRedundantQ4").show();
        invalid = true;
    } else {
        $("#error-howOldRedundantQ4").hide();
    }
    if (typeof Q4 !== 'undefined' && !Q4 && typeof Q5 === 'undefined') {
        $("#error-Q5").css("border-color", "#282828");
        $("#error-Q5").html("Please answer this question");
        $("#error-Q5").show();
        invalid = true;
    } else {
        $("#error-Q5").hide();
    }
    if (typeof Q5 !== 'undefined' && Q5 && document.getElementById("howOldRedundantQ5").value === "") {
        $("#error-howOldRedundantQ5").css("border-color", "#282828");
        $("#error-howOldRedundantQ5").html("Please answer this question");
        $("#error-howOldRedundantQ5").show();
        invalid = true;
    } else {
        $("#error-howOldRedundantQ5").hide();
    }
    if (typeof Q5 !== 'undefined' && !Q5 && document.getElementById("weeksPerYear").value === "") {
        $("#error-weeksPerYear").css("border-color", "#282828");
        $("#error-weeksPerYear").html("Please answer this question");
        $("#error-weeksPerYear").show();
        invalid = true;
    } else {
        $("#error-weeksPerYear").hide();
    }
    if (typeof Q5 !== 'undefined' && !Q5 && typeof Q6 === 'undefined') {
        $("#error-Q6").css("border-color", "#282828");
        $("#error-Q6").html("Please answer this question");
        $("#error-Q6").show();
        invalid = true;
    } else {
        $("#error-Q6").hide();
    }
    if (typeof Q6 !== 'undefined' && Q6 && document.getElementById("maxYears").value === "") {
        $("#error-maxYears").css("border-color", "#282828");
        $("#error-maxYears").html("Please answer this question");
        $("#error-maxYears").show();
        invalid = true;
    } else {
        $("#error-maxYears").hide();
    }

    return invalid;
}

var valuesValidation = function () {
    var invalid = false;
    dateString = document.getElementById("Q1").value;
    //var dateParts = dateString.split("/");
    if (dateString !== "" && dateString.search("/") !== -1) {
        var dateParts = dateString.split("/");
        var Q1Val = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    }else if (dateString !== "" && dateString.search("-") !== -1) {
        var dateParts = dateString.split("-");
        var Q1Val = new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2]);
    }
    today = new Date();
    if (Q1Val.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
        $("#error-Q1").css("border-color", "#282828");
        $("#error-Q1").html("Date must be within today or later");
        $("#error-Q1").show();
        invalid = true;
    } else {
        $("#error-Q1").hide();
    }

    var Q2Val = +document.getElementById("Q2").value;
    if (Q2Val < 0 || Q2Val > 60) {
        $("#error-Q2").css("border-color", "#282828");
        $("#error-Q2").html("Value must be higher than 0 and lower than 60");
        $("#error-Q2").show();
        invalid = true;
    } else {
        $("#error-Q2").hide();
    }

    var Q3Val = +document.getElementById("Q3").value;
    if (Q3Val < 0) {
        $("#error-Q3").css("border-color", "#282828");
        $("#error-Q3").html("Value must be higher than 0");
        $("#error-Q3").show();
        invalid = true;
    } else {
        $("#error-Q3").hide();
    }

    var QHoRVal = +document.getElementById("howOldRedundantQ4").value;
    if (typeof Q4 !== 'undefined' && Q4 && (QHoRVal > 99 || QHoRVal < 15)) {
        $("#error-howOldRedundantQ4").css("border-color", "#282828");
        $("#error-howOldRedundantQ4").html("Age must be higher than 15 and lower than 99");
        $("#error-howOldRedundantQ4").show();
        invalid = true;
    } else {
        $("#error-howOldRedundantQ4").hide();
    }

    var QHoRVal5 = +document.getElementById("howOldRedundantQ5").value;
    if (typeof Q5 !== 'undefined' && Q5 && (QHoRVal5 > 99 || QHoRVal5 < 15)) {
        $("#error-howOldRedundantQ5").css("border-color", "#282828");
        $("#error-howOldRedundantQ5").html("Age must be higher than 15 and lower than 99");
        $("#error-howOldRedundantQ5").show();
        invalid = true;
    } else {
        $("#error-howOldRedundantQ5").hide();
    }

    var QWPYVal = +document.getElementById("weeksPerYear").value;
    if (typeof Q5 !== 'undefined' && !Q5 && QWPYVal < 0) {
        $("#error-weeksPerYear").css("border-color", "#282828");
        $("#error-weeksPerYear").html("Value must be higher than 0");
        $("#error-weeksPerYear").show();
        invalid = true;
    } else {
        $("#error-weeksPerYear").hide();
    }

    var QMYVal = +document.getElementById("maxYears").value;
    if (typeof Q6 !== 'undefined' && Q6 && QMYVal < 0) {
        $("#error-maxYears").css("border-color", "#282828");
        $("#error-maxYears").html("Value must be higher than 0");
        $("#error-maxYears").show();
        invalid = true;
    } else {
        $("#error-maxYears").hide();
    }

    if (typeof Q4 !== 'undefined' && Q4 && QHoRVal > 0 && Q2Val > 0) {
        if (QHoRVal > 0 && (QHoRVal - Q2Val) < 15) {
            $("#error-howOldRedundantQ4").css("border-color", "#282828");
            $("#error-howOldRedundantQ4").html("Age minus years worked must higher than 15 and lower than 99");
            $("#error-howOldRedundantQ4").show();
            $("#error-Q2").css("border-color", "#282828");
            $("#error-Q2").html("Age minus years worked must higher than 15 and lower than 99");
            $("#error-Q2").show();
            invalid = true;
        } else {
            $("#error-Q2").hide();
            $("#error-howOldRedundantQ4").hide();
        }
    }
    if (typeof Q5 !== 'undefined' && Q5 && QHoRVal5 > 0 && Q2Val > 0) {
        if (QHoRVal5 > 0 && (QHoRVal5 - Q2Val) < 15) {
            $("#error-howOldRedundantQ5").css("border-color", "#282828");
            $("#error-howOldRedundantQ5").html("Age minus years worked must higher than 15 and lower than 99");
            $("#error-howOldRedundantQ5").show();
            $("#error-Q2").css("border-color", "#282828");
            $("#error-Q2").html("Age minus years worked must higher than 15 and lower than 99");
            $("#error-Q2").show();
            invalid = true;
        } else {
            $("#error-Q2").hide();
            $("#error-howOldRedundantQ5").hide();
        }
    }

    return invalid;
}
var scrollToTop = function () {
    window.scrollTo({
        top: 200,
        behavior: "smooth"
    });
}

$(document).ready(function () {

    //Deposit
    $('#Q1').on('change', function () {
        Q1 = true;
    });

    $('#Q2').on('change', function () {
        Q2 = true;
    });

    $('#Q3').on('change', function () {
        Q3 = true;
    });

    $('#Q4-1').on('click', function () {
        Q4 = true;
        Q4_1 = true;
        Q4_2 = false;
        Q4_3 = false;
        document.getElementById("statutory&dunnoQ4").style.display = "block";
        document.getElementById("enhanced").style.display = "none";
        document.getElementById("enhancedFormula&WeeklyCap").style.display = "none";
    });
    $('#Q4-2').on('click', function () {
        Q4 = false;
        Q4_1 = false;
        Q4_2 = true;
        Q4_3 = false;
        document.getElementById("statutory&dunnoQ4").style.display = "none";
        document.getElementById("enhanced").style.display = "block";
    });
    $('#Q4-3').on('click', function () {
        Q4 = true;
        Q4_1 = false;
        Q4_2 = false;
        Q4_3 = true;
        document.getElementById("statutory&dunnoQ4").style.display = "block";
        document.getElementById("enhanced").style.display = "none";
        document.getElementById("enhancedFormula&WeeklyCap").style.display = "none";
    });

    $('#Q5-1').on('click', function () {
        document.getElementById("statutory&dunnoQ5").style.display = "block";
        document.getElementById("weekPerYearPay").style.display = "none";
        document.getElementById("enhancedFormula&WeeklyCap").style.display = "block";
        Q5 = true;
        Q5_1 = true;
        Q5_2 = false;
        Q5_3 = false;
    });
    $('#Q5-2').on('click', function () {
        document.getElementById("statutory&dunnoQ5").style.display = "none";
        document.getElementById("weekPerYearPay").style.display = "block";
        document.getElementById("enhancedFormula&WeeklyCap").style.display = "block";
        Q5 = false;
        Q5_1 = false;
        Q5_2 = true;
        Q5_3 = false;
    });
    $('#Q5-3').on('click', function () {
        document.getElementById("statutory&dunnoQ5").style.display = "block";
        document.getElementById("weekPerYearPay").style.display = "none";
        document.getElementById("enhancedFormula&WeeklyCap").style.display = "none";
        Q5 = true;
        Q5_1 = false;
        Q5_2 = false;
        Q5_3 = true;
    });

    $('#Q6-1').on('click', function () {
        Q6 = true;
        Q6_1 = true;
        Q6_2 = false;
        Q6_3 = false;
        document.getElementById("ifYesMaxYears").style.display = "block";
    });
    $('#Q6-2').on('click', function () {
        Q6 = false;
        Q6_1 = false;
        Q6_2 = true;
        Q6_3 = false;
        document.getElementById("ifYesMaxYears").style.display = "none";
    });
    $('#Q6-3').on('click', function () {
        Q6 = false;
        Q6_1 = false;
        Q6_2 = false;
        Q6_3 = true;
        document.getElementById("ifYesMaxYears").style.display = "none";
    });
});
