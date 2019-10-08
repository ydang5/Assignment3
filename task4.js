const PRESSURE_ARR = [80, 90, 100, 150, 120, 110, 160, 110, 100];

function getMean(){
  var sumNumber = 0
  for (var i =0; i < PRESSURE_ARR.length; i = i + 1){
    var number = PRESSURE_ARR[i];
    sumNumber = sumNumber + number;
  }
  return sumNumber/PRESSURE_ARR.length
}

document.getElementById("mean").innerHTML = getMean();
