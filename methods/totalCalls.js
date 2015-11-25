exports.totalCalls = function(providerMap) {
  var totalCallsMap = {};
  for (var x in providerMap){


    if(!totalCallsMap[providerMap[x].number]){
      totalCallsMap[providerMap[x].number] = 1;
    }
    else{
      totalCallsMap[providerMap[x].number] += 1;
    }

  }
    return totalCallsMap;

}
