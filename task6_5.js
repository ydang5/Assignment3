function getMean(){
  var sumNumber = 0
  for (var i =0; i < PRESSURE_ARR.length; i = i + 1){
    var number = PRESSURE_ARR[i];
    sumNumber = sumNumber + number;
  }
  return sumNumber/PRESSURE_ARR.length
}

 function getVariance(array) {
  var mean = arr.getMean(array);
  return arr.mean(array.map(function(num) {
    return Math.pow(num - mean, 2);
  }));
}
const POWER_ARR = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2, 2];
var element = document.getElementById("variance");
element.innerHTML = getVariance(POWER_ARR);
