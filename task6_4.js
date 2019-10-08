//Function will return standard deviation.
//Taken this code from: https://stackoverflow.com/questions/7343890/standard-deviation-javascript

function getStandardDeviation(numbersArr) {
    //--CALCULATE AVAREGE--
    var total = 0;
    for(var key in numbersArr)
       total += numbersArr[key];
    var meanVal = total / numbersArr.length;
    //--CALCULATE AVAREGE--

    //--CALCULATE STANDARD DEVIATION--
    var SDprep = 0;
    for(var key in numbersArr)
       SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
    var SDresult = Math.sqrt(SDprep/numbersArr.length);
    //--CALCULATE STANDARD DEVIATION--
    return SDresult;
}

const POWER_ARR = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2, 2];
var element = document.getElementById("standard deviation");
element.innerHTML = getStandardDeviation(POWER_ARR);
