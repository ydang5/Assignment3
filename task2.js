function getHumidityConditon(humidityValue){
  if (humidityValue > 60){
    return "Humid";
  } else if (humidityValue < 30){
    return "Dry";
  }else{
      return "OK"
  }
}

function performCalculation(){
  var value = parseFloat(document.getElementById("value").value);
  document.getElementById("result").innerHTML = getHumidityConditon(value);
}
