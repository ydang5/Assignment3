function checkCo2Value(){
  var co2_value = parseInt(document.getElementById("number").value);
  if (co2_value >= 1600){
    result = "Air quality is BAD, and ventilation is required";
  }
  else if (co2_value >= 1100 && co2_value < 1600){
    result="Air quality is MEDICORE, and ventilation is recommended";
  }
  else if (co2_value >= 900 && co2_value < 1100){
    result = "Air quality is FAIR";
  }

  else if (co2_value >=700 && co2_value < 900){
    result  = "Air quality is GOOD";
  }

  else if (co2_value < 700){
      result = ("Air quality is EXCELLENT");
  }
  document.getElementById("result").innerHTML = result;
}
