// -- 1 --

// -- 2 --

function findMax(num1, num2, num3, num4) {
    if (num1 > num2 && num1 > num3 && num1 > num4) {
        return num1;
    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
        return num2;
    } else if (num3 > num1 && num3 > num2 && num3 > num4) {
        return num3;
    } else return num4;
}

// -- 3 --

function findMinAbsValue(str1, str2, str3) {
    var strToNumber1 = parseFloat(str1);
    var strToNumber2 = parseFloat(str2);
    var strToNumber3 = parseFloat(str3);

    var number1 = Math.abs(strToNumber1);
    var number2 = Math.abs(strToNumber2);
    var number3 = Math.abs(strToNumber3);


    if (number1 < number2 && number1 < number3) {
        return number1;
    } else if (number2 < number1 && number2 < number3) {
        return number2;
    } else {
        return number3;
    }
}