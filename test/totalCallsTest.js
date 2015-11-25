var totalCalls = require("../methods/totalCalls");
var getPhoneCalls = require('../methods/getPhoneCalls');
var readCSV = require("../methods/readCSV");
var assert = require("assert");

describe('Gets total amount of phone calls to a specific number from a given service provider', function(){
    it('returns list of total phone calls to a number from MTN', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      var providerMap = getPhoneCalls.getPhoneCalls(billMap, "MTN");
      var results = { '0832401145': 5,
                      '0838758090': 5,
                      '0831239023': 3,
                      '0832004576': 1,
                      '0837351200': 1,
                      '0834590001': 1
                    }


      assert.deepEqual(totalCalls.totalCalls(providerMap), results);
      done();
    });
});
