//Method will xconvert celius to kelvin

function cToK(c){
  var k = c + 273.15;
  return k
}

function performCalculation(){
  var value = parseFloat(document.getElementById("celiusValue").value);
  document.getElementById("result").innerHTML = cToK(value);
}
