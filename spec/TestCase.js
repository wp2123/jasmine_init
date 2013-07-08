describe('compare two numbers', function () {
    it('given: 1234 1234, when: compare two number, then: return 4A0B', function () {
        var number1 = 1234;
        var number2 = 1234;
        var result = "";

        result = compare_two_number(number1,number2);

        expect(result).toEqual("4A0B");
    });

    it('given: 1234 4321, when: compare two number, then: return 0A4B', function () {
        var number1 = 1234;
        var number2 = 4321;
        var result = "";

        result = compare_two_number(number1,number2);

        expect(result).toEqual("0A4B");
    });

    it('given: 1234 5678, when: compare two number, then: return 0A0B', function () {
        var number1 = 1234;
        var number2 = 5678;
        var result = "";

        result = compare_two_number(number1,number2);

        expect(result).toEqual("0A0B");
    });

    it('given: 1234 5678, when: compare two number, then: return 2A2B', function () {
        var number1 = 1234;
        var number2 = 4231;
        var result = "";

        result = compare_two_number(number1,number2);

        expect(result).toEqual("2A2B");
    });

    it('given: 1234 1567, when: compare two number, then: return 1A0B', function () {
        var number1 = 1234;
        var number2 = 1567;
        var result = "";

        result = compare_two_number(number1,number2);

        expect(result).toEqual("1A0B");
    });

//    it('it should return 0A4B', function () {
//    });
//
//    it('it should return 0A0B', function () {
//    });
//
//    it('it should return 2A2B', function () {
//    });
//
//    it('it should return 1A0B', function () {
//    });

});