//Method will convert Fahrenheit to kelvin.

function fToK(f){
  var k = (f - 32) * 5/9 + 273.15;
  return k
}

function performCalculation(){
  var value = parseFloat(document.getElementById("fahrenheitValue").value);
  document.getElementById("result").innerHTML = fToK(value);
}
