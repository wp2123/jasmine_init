describe("generate random number", function () {
    it("when generate a random number ,then it should be a number", function () {
        var random_number = generate_random_number();
        var is_number = is_number_helper(random_number);

        expect(is_number).toEqual(true);
    });

    it("when generate a random number, then it should be a 4 bits number", function () {
        var random_number = generate_random_number();
        var is_4_bits_number = is_4_bits_number_helper(random_number);

        expect(is_4_bits_number).toEqual(true);
    });

    it("when generate a random number, then it should have no same characters", function () {
        var random_number = generate_random_number();
        var is_have_no_same_characters = is_have_no_same_characters_helper(random_number);

        expect(is_have_no_same_characters).toEqual(true);
    });

    it("when generate a random number, then it should be a random number", function () {
        var random_number = generate_random_number();
        var is_random_number = is_random_number_helper(random_number);

        expect(is_random_number).toEqual(true);
    });
});