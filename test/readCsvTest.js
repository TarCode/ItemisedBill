var readCSV = require('../methods/readCSV');
var assert = require("assert");

describe('Read Itemised Bill CSV', function(){
    it('should read CSV file and return a list of object maps', function (done) {
      assert.equal(readCSV.readCSV("./ItemisedBill.csv").length, 35);
      done();
    });
});
