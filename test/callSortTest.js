var callSort = require("../methods/callSort");
var callDuration = require('../methods/callDuration');
var getPhoneCalls = require('../methods/getPhoneCalls');
var readCSV = require("../methods/readCSV");
var assert = require("assert");

describe('Sorts phone calls in ascending order', function(){
    it('returns list of phone calls from MTN in ascending order', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      var providerMap = getPhoneCalls.getPhoneCalls(billMap, "MTN");
      var callDurationList = callDuration.callDuration(providerMap);
      var results = [ { provider: 'MTN', number: '0837351200', duration: 34 },
                      { provider: 'MTN', number: '0838758090', duration: 76 },
                      { provider: 'MTN', number: '0838758090', duration: 94 },
                      { provider: 'MTN', number: '0831239023', duration: 94 },
                      { provider: 'MTN', number: '0832004576', duration: 100 },
                      { provider: 'MTN', number: '0838758090', duration: 127 },
                      { provider: 'MTN', number: '0832401145', duration: 159 },
                      { provider: 'MTN', number: '0832401145', duration: 161 },
                      { provider: 'MTN', number: '0831239023', duration: 161 },
                      { provider: 'MTN', number: '0831239023', duration: 184 },
                      { provider: 'MTN', number: '0834590001', duration: 334 },
                      { provider: 'MTN', number: '0832401145', duration: 334 },
                      { provider: 'MTN', number: '0832401145', duration: 334 },
                      { provider: 'MTN', number: '0838758090', duration: 334 },
                      { provider: 'MTN', number: '0832401145', duration: 394 },
                      { provider: 'MTN', number: '0838758090', duration: 551 } ]
      assert.deepEqual(callSort.callSort(callDurationList), results);
      done();
    });
});
