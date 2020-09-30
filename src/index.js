
exports.min = function min(array) {
  if (!array || array.length <= 0) {
    return 0;
  } else {
    return (array.sort(function(a, b){return a-b}))[0];
  }
}

exports.max = function max(array) {
  if (!array || array.length <= 0) {
    return 0;
  } else {
    return (array.sort(function(a, b){return b-a}))[0];
  }
}

exports.avg = function avg(array) {
  let sum = 0;
  if (!array || array.length <= 0) {
    return 0;
  } else {
    array.reduce(function (a, i){
        return sum = a + i;
    }, 0)
}
    return sum / array.length;
}
