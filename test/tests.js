var code = require('../main');
var expect = require('chai').expect;

describe('Leap Year', function() {
    it("should return 'common year' for a year divisible by 4", function() {
        expect(code.isLeapYear(1900)).to.equal('common year');
    });
    it("should return 'leap year' for a year not divisible by 100", function() {
        expect(code.isLeapYear(1992)).to.equal('leap year');
    });
    it("should return 'common year' for years that are not divisible by 400", function() {
        expect(code.isLeapYear(1700)).to.equal('common year');
    });
    it("should return 'leap year' for years that are not divisible by 400 or 100", function() {
        expect(code.isLeapYear(2000)).to.equal('leap year');
    });
});