exports.totalCalls = function(providerMap) {
  var totalCallsMap = {};
  for (var x in providerMap){


    if(!totalCallsMap[providerMap[x].Number]){
      totalCallsMap[providerMap[x].Number] = 1;
    }
    else{
      totalCallsMap[providerMap[x].Number] += 1;
    }

  }
    return totalCallsMap;

}
