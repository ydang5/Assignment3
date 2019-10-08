//code is taken from: https://stackoverflow.com/questions/45309447/calculating-median-javascript

const POWER_ARR = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2];

  function getMedian(value){
  if(value.length ===0) return 0;

  value.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(value.length / 2);

  if (value.length % 2)
    return value[half];

  return (value[half - 1] + value[half]) / 2.0;
}

document.getElementById("median").innerHTML = getMedian(POWER_ARR);
