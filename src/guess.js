function Guess(fn) {
    this.random_number = fn();
}

Guess.prototype.guess_number = function(number) {
    var result = compare_two_number(number, this.random_number);
    return result;
};