/**
*  Function will return mode value(s).
*  Code taken from https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript#targetText=*%20and%20then%20divide%20by%20the%20number%20of%20numbers.&targetText=*%20For%20example%2C%20the%20%22mean,2%2C%203%5D%20is%202.875.&targetText=*%20The%20%22median%22%20is%20the,in%20the%20list%20of%20numbers.&targetText=*%20%40return%20%7BNumber%7D%20The%20calculated%20median,value%20from%20the%20specified%20numbers.
*/
function getMode(numbers) {
   // as result can be bimodal or multi-modal,
   // the returned result is provided as an array
   // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
   var modes = [], count = [], i, number, maxIndex = 0;
   for (i = 0; i < numbers.length; i += 1) {
       number = numbers[i];
       count[number] = (count[number] || 0) + 1;
       if (count[number] > maxIndex) {
           maxIndex = count[number];
       }
   }
   for (i in count)
       if (count.hasOwnProperty(i)) {
           if (count[i] === maxIndex) {
               modes.push(Number(i));
           }
       }
   return modes;
}
const POWER_ARR = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2, 2];
var element = document.getElementById("mode");
element.innerHTML = getMode(POWER_ARR);
