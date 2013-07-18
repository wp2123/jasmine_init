function is_number_helper(random_number) {
    var test_random_number = random_number + 1;
    if(test_random_number.toString().length != random_number.toString().length) {
        return false;
    }
    else {
        return true;
    }
}