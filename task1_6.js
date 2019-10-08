//Method will convert Kelvin to Fahrenheit  .

function kToF(k){
  var f = - (k - 273.15) * 9/5 +32;
  return f
}

function performCalculation(){
  var value = parseFloat(document.getElementById("kelvinValue").value);
  document.getElementById("result").innerHTML = kToF(value);
}
