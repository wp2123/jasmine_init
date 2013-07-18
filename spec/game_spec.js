describe("play the game", function () {

    function mock_generate_random_number() {
        return 1234;
    }

    function mock_play_5_times_game(){
        for(var i=0;i<5;i++){
            game_obj.game(2345);
        }
    }

    function mock_play_4_times_game(){
        for(var i=0;i<4;i++){
            game_obj.game(2345);
        }
    }

    beforeEach(function () {
        game_obj = new Game(mock_generate_random_number);
    });

    it("input a right number at the first time, then show You are win", function () {
        var input_number = 1234;

        var result = game_obj.game(input_number);

        expect(result).toBe("You are win");
    });

    it("input a right number at the sixth time, then show You are win", function () {
        var input_number = 1234;

        mock_play_5_times_game();
        var result = game_obj.game(input_number);

        expect(result).toBe("You are win");
    });

    it("input a wrong number at the first time, then show You are wrong, 5 times left", function () {
        var input_number = 3456;

        var result = game_obj.game(input_number);

        expect(result).toBe("You are wrong, 5 times left");
    });

    it("input a wrong number at the fifth times, then show You are wrong, 1 times left", function () {
        var input_number = 3456;

        mock_play_4_times_game();
        var result = game_obj.game(input_number);

        expect(result).toBe("You are wrong, 1 times left");
    });

    it("input a wrong number at the sixth time, then show Game over", function () {
        var input_number = 2345;

        mock_play_5_times_game()
        var result = game_obj.game(input_number);

        expect(result).toBe("Game over");
    });
});