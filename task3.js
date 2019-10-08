const TEMPERATURES_ARR = [21, 23, 26, 22, 25, 20, 19, 23]


function getMinimun(){
  return Math.min(...TEMPERATURES_ARR);
}


function getMaximum(){
  return Math.max(...TEMPERATURES_ARR);
}

document.getElementById("min").innerHTML = getMinimun();

document.getElementById("max").innerHTML = getMaximum();
