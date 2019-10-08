//Method will convert Fahrenheit to celius.

function fToC(f){
  var c = (f - 32) * 0.5566;
  return c
}

function performCalculation(){
  var value = parseFloat(document.getElementById("fahrenheitValue").value);
  document.getElementById("result").innerHTML = fToC(value);
}
