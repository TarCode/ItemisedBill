exports.totalCallTime = function(sortedCalls) {
var totalTime =0;
  for (var x in sortedCalls){
    time = parseInt(sortedCalls[x].duration);
    totalTime += time;
  }
  var total = {provider: sortedCalls[0].provider, duration : totalTime}
  return total;
};
