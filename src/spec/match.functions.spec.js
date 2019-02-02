var mathFunctions = require('../functions/match.functions');

describe("Tests for my math functions", function () {
    it("2 should be even", function () {
        expect(mathFunctions.isEven(2)).toBe(true);
    });

    it("3 should not be even", function () {
        expect(mathFunctions.isEven(3)).toBe(false);
    });

    var myArray = [3, 2, 2, 3];
    var myArray2 = null;
    var myArray3 = [0.003, 0.004, 0.0009, 1, 3.2];

    it("3+2+2+3 to be 10", function () {
        expect(mathFunctions.sum(myArray)).toEqual(10);
    });

    it("For Null array expect to throw error", function () {
        expect(function () {
            mathFunctions.sum(myArray2);
        }).toThrow(new Error("Parameter [numbers] should NOT be NULL."));
    });

    it("For decimal numbers to have at least 2 precision correct", function(){
        expect(mathFunctions.sum(myArray3)).toBeCloseTo(4.108, 2);
    });
});