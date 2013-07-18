function Game(fn){
    this.times = 6;
    this.random_number = fn();
}

Game.prototype = {
    game: function (given_number) {
        var result = compare_two_number(given_number, this.random_number);
        this.times--;
        if(result == "4A0B") {
            return "You are win";
        } else if(result != "4A0B" && this.times > 0){
            return 'You are wrong, ' + this.times + ' times left';
        } else {
            return "Game over";
        }
    }
};
