exports.getPhoneCalls = function(billMap, serviceProvider) {
  var phoneCallList = [];
    for (var x in billMap){
      if(billMap[x].provider == serviceProvider && billMap[x] !== undefined){
        phoneCallList.push({"provider": billMap[x].provider,
                            "number":   billMap[x].number,
                            "duration": billMap[x].duration
                          });
      }
    }
    return phoneCallList;

}
