/**
* The "range" of a list a numbers is the difference between the largest and
* smallest values. Code taken from: https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript#targetText=*%20and%20then%20divide%20by%20the%20number%20of%20numbers.&targetText=*%20For%20example%2C%20the%20%22mean,2%2C%203%5D%20is%202.875.&targetText=*%20The%20%22median%22%20is%20the,in%20the%20list%20of%20numbers.&targetText=*%20%40return%20%7BNumber%7D%20The%20calculated%20median,value%20from%20the%20specified%20numbers.
*
* For example, the "range" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 5].
*
* @param {Array} numbers An array of numbers.
* @return {Array} The range of the specified numbers.
*/
function getRange(numbers) {
   numbers.sort();
   return [numbers[0], numbers[numbers.length - 1]];
}
const POWER_ARR = [4, 5, 2, 6, 3, 7, 8, 9, 6, 5, 2, 2];
var element = document.getElementById("range");
element.innerHTML = getRange(POWER_ARR);
