// -- 1 --

function countAE(str1, str2) {

    var str1ToLowerCase = str1.toLowerCase();
    var str2ToLowerCase = str2.toLowerCase(); 

    var countStr1A = str1ToLowerCase.replaceAll("a", "").length;
    var countStr1E = str1ToLowerCase.replaceAll("e", "").length;
    var countStr2A = str2ToLowerCase.replaceAll("a", "").length;
    var countStr2E = str2ToLowerCase.replaceAll("e", "").length;

    var totalCountStr1 = countStr1A + countStr1E;
    var totalCountStr2 = countStr2A + countStr2E;

    if (totalCountStr1 === totalCountStr2) {
        return `${str1}, ${str2}`;
    } else if (totalCountStr1 > totalCountStr2) {
        return str1;
    } else {
        return str2;
    }
}

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

// -- 4 --

function fewerZeroes(num1, num2) {
    var convertString1 = num1.toString();
    var convertString2 = num2.toString();

    var replaceString1 = convertString1.replaceAll("0", " ");
    var replaceString2 = convertString2.replaceAll("0", " ");

    if (replaceString1 === replaceString2) {
        return num1;
    } else if (replaceString1 < replaceString2) {
        return num1;
    } else {
        return num2;
    }
}

// -- 5 --

function multiplyMinMaxLength(str1, str2, str3) {
    var strLength1 = str1.length;
    var strLength2 = str2.length;
    var strLength3 = str3.length;

    var maxVal = strLength1;
    if (strLength2 < maxVal) maxVal = strLength2;
    if (strLength3 < maxVal) maxVal = strLength3;

    var minVal = strLength1;
    if (strLength2 > minVal) minVal = strLength2;
    if (strLength3 > minVal) minVal = strLength3;

    var multiplyLength = maxVal * minVal;
    return multiplyLength;
}