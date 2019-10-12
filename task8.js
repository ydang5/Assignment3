function checkTvocValue(){
  var tvoc_value = parseInt(document.getElementById("number").value);
  if (tvoc_value > 2200 && tvoc_value < 5500){
    result = "level 5, unhealty";
  }
  else if (tvoc_value > 660 && tvoc_value <= 2200){
    result="level 4, poor";
  }
  else if (tvoc_value > 220 && tvoc_value <=660){
    result = "level 3, moderate";
  }

  else if (tvoc_value > 65 && tvoc_value <= 220){
    result  = "level 2, good";
  }

  else if (tvoc_value <= 65){
      result = ("level 1, excellent");
  }
  else result = ("out of meter's capacity")
  document.getElementById("result").innerHTML = result;
}
