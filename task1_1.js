//Method will convert celius to Fahrenheit.

function cToF(c){
  var f = (c* 9/5) + 32;
  return f
}

function performCalculation(){
  var value = parseFloat(document.getElementById("celiusValue").value);
  document.getElementById("result").innerHTML = cToF(value);
}
