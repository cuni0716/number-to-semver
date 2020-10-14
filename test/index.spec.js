const numberToSemver = require("../src/index");

describe("Should throw", () => {
    it("should throw error if input is undefined", () => {
        try {
            numberToSemver();
        } catch (e) {
            expect(e.message).toEqual("undefined is not a valid parameter input");
        }
    });

    it("should throw error if input is null", () => {
        try {
            numberToSemver(null);
        } catch (e) {
            expect(e.message).toEqual("null is not a valid parameter input");
        }
    });

    it("should throw error if input is NaN", () => {
        try {
            numberToSemver("string");
        } catch (e) {
            expect(e.message).toEqual("string is not a valid parameter input");
        }
    });
});

describe("Should work", () => {
    it("should return correct semver", () => {
        const testData = [
            { input: 0, expected: "0.0.0" },
            { input: 1, expected: "0.0.1" },
            { input: 10, expected: "0.0.10" },
            { input: 100, expected: "0.1.0" },
            { input: 101, expected: "0.1.01" },
            { input: 111, expected: "0.1.11" },
            { input: 1000, expected: "1.0.0" },
            { input: 1001, expected: "1.0.01" },
            { input: 1010, expected: "1.0.10" },
            { input: 1100, expected: "1.1.0" },
            { input: 1101, expected: "1.1.01" },
            { input: 1111, expected: "1.1.11" },
            { input: 1234, expected: "1.2.34" },
            { input: 12345, expected: "12.3.45" },
            { input: 12340, expected: "12.3.40" },
            { input: 12300, expected: "12.3.0" },
            { input: 12000, expected: "12.0.0" },
            { input: 123456, expected: "123.4.56" },
            { input: 123450, expected: "123.4.50" },
            { input: 123400, expected: "123.4.0" },
            { input: 123000, expected: "123.0.0" },
        ];

        testData.forEach(({ input, expected }) => {
            expect(numberToSemver(input)).toEqual(expected);
        });
    });
});
