exports.getPhoneCalls = function(billMap, serviceProvider) {
  var phoneCallList = [];
    for (var x in billMap){
      if(billMap[x].provider == serviceProvider && billMap[x] !== undefined){
        phoneCallList.push({"Provider": billMap[x].provider,
                            "Number":   billMap[x].number,
                            "Duration": billMap[x].duration
                          });
      }
    }
    return phoneCallList;

}
