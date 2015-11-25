var callDuration = require('../methods/callDuration');
var getPhoneCalls = require('../methods/getPhoneCalls');
var readCSV = require("../methods/readCSV");
var assert = require("assert");

describe('Gets total duration of phone calls from a given service provider in seconds', function(){
    it('returns list of phone calls from MTN', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      var providerMap = getPhoneCalls.getPhoneCalls(billMap, "MTN");
      var results = [ { Provider: "MTN", Number: '0832401145', Duration: '334 seconds' },
                      { Provider: "MTN", Number: '0838758090', Duration: '94 seconds' },
                      { Provider: "MTN", Number: '0832401145', Duration: '394 seconds' },
                      { Provider: "MTN", Number: '0838758090', Duration: '76 seconds' },
                      { Provider: "MTN", Number: '0832401145', Duration: '161 seconds' },
                      { Provider: "MTN", Number: '0838758090', Duration: '551 seconds' },
                      { Provider: "MTN", Number: '0832401145', Duration: '334 seconds' },
                      { Provider: "MTN", Number: '0838758090', Duration: '127 seconds' },
                      { Provider: "MTN", Number: '0838758090', Duration: '334 seconds' },
                      { Provider: "MTN", Number: '0832401145', Duration: '159 seconds' },
                      { Provider: "MTN", Number: '0831239023', Duration: '161 seconds' },
                      { Provider: "MTN", Number: '0832004576', Duration: '100 seconds' },
                      { Provider: "MTN", Number: '0831239023', Duration: '94 seconds' },
                      { Provider: "MTN", Number: '0837351200', Duration: '34 seconds' },
                      { Provider: "MTN", Number: '0834590001', Duration: '334 seconds' },
                      { Provider: "MTN", Number: '0831239023', Duration: '184 seconds' } ]

      assert.deepEqual(callDuration.callDuration(providerMap), results);
      done();
    });
});
