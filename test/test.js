
var expect = require("chai").expect;
var printQuestionMarks = require("../config/orm.js");
var objToSql = require("../config/orm.js");

// Tried many different ways to get the expected result. Entered an integer and array (as
// it is used in orm.js) and I still got an Assertion Error that the actual result was an empty string.
describe("printQuestionMarks", function() {
    var value = [2, 3, 4];
    it("should turn the number given into question mark(s)", function() {
      expect(printQuestionMarks(value.length)).to.equal("?,?,?");
    });
});

describe("objToSql", function() {
    var myCar = {
        make: 'Ford'
        };
    it("should turn an object into a string", function() {
      expect(objToSql(myCar)).to.equal("make=Ford");
    });
});



  