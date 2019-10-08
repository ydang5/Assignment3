//Method will convert Kelvin to Celsius .

function kToC(k){
  var c = k - 273.15;
  return c
}

function performCalculation(){
  var value = parseFloat(document.getElementById("kelvinValue").value);
  document.getElementById("result").innerHTML = kToC(value);
}
