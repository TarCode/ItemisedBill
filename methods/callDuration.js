exports.callDuration = function(providerMap) {
  var callDurationList = [];
  for (var x in providerMap){
    var seconds = providerMap[x].duration;
    seconds = seconds.split(/h|m|s/);
    seconds.pop();
    seconds = parseInt((seconds[1]*60)) + parseInt(seconds[2]);

    callDurationList.push({provider: providerMap[x].provider,
                           number:   providerMap[x].number,
                           duration: seconds
                         });
  }
  return callDurationList;
};
