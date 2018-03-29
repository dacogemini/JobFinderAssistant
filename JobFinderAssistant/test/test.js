var expect = require("chai").expect;
var printQuestionMarks = require("../config/orm.js");
var objToSql = require("../config/orm.js");

describe("printQuestionMarks", function() {
    it("should turn the number given into question mark(s)", function() {
      expect(printQuestionMarks(4)).to.equal("????");
    });
});

describe("objToSql", function() {
    var myCar = {
        make: 'Ford'
        }
    it("should turn an object into a string", function() {
      expect(objToSql(myCar)).to.equal("make=Ford");
    });
});

