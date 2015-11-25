var totalCallTime = require("../methods/totalCallTime");
var callSort = require("../methods/callSort");
var callDuration = require('../methods/callDuration');
var getPhoneCalls = require('../methods/getPhoneCalls');
var readCSV = require("../methods/readCSV");
var assert = require("assert");

describe('Gets total talk time per service provider', function(){
    it('returns service provider and total talk time', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      var providerMap = getPhoneCalls.getPhoneCalls(billMap, "MTN");
      var callDurationList = callDuration.callDuration(providerMap);
      var sortedCalls = callSort.callSort(callDurationList)
      var results = { provider: 'MTN', duration: 3471 }

      assert.deepEqual(totalCallTime.totalCallTime(sortedCalls), results);
      done();
    });
});
