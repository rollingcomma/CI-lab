const camelCaseConverter = require("./camelCaseConverter");

describe("converter function", () => {
    test("test camelCaseConverter function for single input string", () => {
        const input = ['hello world', 'BETTER WORLD', 'gOod Morning', 'Number 45', 'a']
        expect(camelCaseConverter(input[0])).toEqual("helloWorld");
        expect(camelCaseConverter(input[1])).toEqual("betterWorld");
        expect(camelCaseConverter(input[2])).toEqual("goodMorning");
        expect(camelCaseConverter(input[3])).toEqual("number45");
        expect(camelCaseConverter(input[4])).toEqual("a");
    })

    test("test camelCaseConverter function for invalid input", () => {
        
        const input1 = ["", undefined, "$#%#$ dege", 6, '6th day', "test Dge&*&"];
        
        expect(() => camelCaseConverter(input1[0])).toThrowError(Error("input strings contain invalid value"));
        expect(() => camelCaseConverter(input1[1])).toThrowError(Error("input strings contain invalid value"));
        expect(() => camelCaseConverter(input1[2])).toThrowError(Error("input strings contain invalid value"));
        expect(() => camelCaseConverter(input1[3])).toThrowError(Error("input strings contain invalid value"));
        expect(() => camelCaseConverter(input1[4])).toThrowError(Error("input strings contain invalid value"));
        expect(() => camelCaseConverter(input1[5])).toThrowError(Error("input strings contain invalid value"));

    })


})