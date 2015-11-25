exports.callDuration = function(providerMap) {
  var callDurationList = [];
  for (var x in providerMap){
    var seconds = providerMap[x].Duration;
    seconds = seconds.split(/h|m|s/);
    seconds.pop();
    seconds = parseInt((seconds[1]*60)) + parseInt(seconds[2]);
    console.log(seconds);

    callDurationList.push({Provider: providerMap[x].Provider,
                           Number:   providerMap[x].Number,
                           Duration: seconds + " seconds"
                         });
  }
  return callDurationList;
};
