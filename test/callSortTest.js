var callSort = require("../methods/callSort");
var callDuration = require('../methods/callDuration');
var getPhoneCalls = require('../methods/getPhoneCalls');
var readCSV = require("../methods/readCSV");
var assert = require("assert");

describe('Sorts phone calls in ascending order', function(){
    it('returns list of phone calls from MTN', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      var providerMap = getPhoneCalls.getPhoneCalls(billMap, "MTN");
      var callDurationList = callDuration.callDuration(providerMap);
      var results = [ { Provider: 'MTN', Number: '0837351200', Duration: 34 },
                      { Provider: 'MTN', Number: '0838758090', Duration: 76 },
                      { Provider: 'MTN', Number: '0838758090', Duration: 94 },
                      { Provider: 'MTN', Number: '0831239023', Duration: 94 },
                      { Provider: 'MTN', Number: '0832004576', Duration: 100 },
                      { Provider: 'MTN', Number: '0838758090', Duration: 127 },
                      { Provider: 'MTN', Number: '0832401145', Duration: 159 },
                      { Provider: 'MTN', Number: '0832401145', Duration: 161 },
                      { Provider: 'MTN', Number: '0831239023', Duration: 161 },
                      { Provider: 'MTN', Number: '0831239023', Duration: 184 },
                      { Provider: 'MTN', Number: '0834590001', Duration: 334 },
                      { Provider: 'MTN', Number: '0832401145', Duration: 334 },
                      { Provider: 'MTN', Number: '0832401145', Duration: 334 },
                      { Provider: 'MTN', Number: '0838758090', Duration: 334 },
                      { Provider: 'MTN', Number: '0832401145', Duration: 394 },
                      { Provider: 'MTN', Number: '0838758090', Duration: 551 } ]
      assert.deepEqual(callSort.callSort(callDurationList), results);
      done();
    });
});
