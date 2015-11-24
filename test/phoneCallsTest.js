var getPhoneCalls = require('../methods/getPhoneCalls');
var readCSV = require("../methods/readCSV");
var assert = require("assert");

describe('Gets all phone calls from a given service provider', function(){
    /** judges comp list test **/
    it('returns list of phone calls from MTN', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      assert.equal(getPhoneCalls.getPhoneCalls(billMap, "MTN").length, 16);
      done();
    });

    it('returns list of phone calls from Vodacom', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      assert.equal(getPhoneCalls.getPhoneCalls(billMap, "Vodacom").length, 8);
      done();
    });

    it('returns list of phone calls from CellC', function (done) {
      var billMap = readCSV.readCSV("./ItemisedBill.csv");
      assert.equal(getPhoneCalls.getPhoneCalls(billMap, "CellC").length, 11);
      done();
    });
});
