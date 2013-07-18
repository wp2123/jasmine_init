function play_game() {
    var input_number = parseInt(document.getElementById("input").value);
    var game_obj = new Game(generate_random_number);
    var prompt = compare_two_number(input_number, game_obj.random_number);
    var result = game_obj.game(input_number);

    document.getElementById("output").value = prompt;
    document.getElementById("result").value = result;
}