var callDuration = require('../methods/callDuration');
var getPhoneCalls = require('../methods/getPhoneCalls');
var readCSV = require("../methods/readCSV");
var assert = require("assert");

describe('Gets duration of phone calls from a given service provider in seconds', function(){
    it('returns list of phone calls from MTN with duration in seconds', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      var providerMap = getPhoneCalls.getPhoneCalls(billMap, "MTN");
      var results = [ { provider: "MTN", number: '0832401145', duration: 334 },
                      { provider: "MTN", number: '0838758090', duration: 94 },
                      { provider: "MTN", number: '0832401145', duration: 394 },
                      { provider: "MTN", number: '0838758090', duration: 76 },
                      { provider: "MTN", number: '0832401145', duration: 161 },
                      { provider: "MTN", number: '0838758090', duration: 551 },
                      { provider: "MTN", number: '0832401145', duration: 334 },
                      { provider: "MTN", number: '0838758090', duration: 127 },
                      { provider: "MTN", number: '0838758090', duration: 334 },
                      { provider: "MTN", number: '0832401145', duration: 159 },
                      { provider: "MTN", number: '0831239023', duration: 161 },
                      { provider: "MTN", number: '0832004576', duration: 100 },
                      { provider: "MTN", number: '0831239023', duration: 94 },
                      { provider: "MTN", number: '0837351200', duration: 34 },
                      { provider: "MTN", number: '0834590001', duration: 334 },
                      { provider: "MTN", number: '0831239023', duration: 184 } ]

      assert.deepEqual(callDuration.callDuration(providerMap), results);
      done();
    });
});
