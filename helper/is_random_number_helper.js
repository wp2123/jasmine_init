function is_random_number_helper(random_number) {
    var same_number = 0;
    var not_same_number = 0;
    for(var i = 0;i < 100;i++) {
        var another_random_number = generate_random_number();
        if(random_number == another_random_number) {
            same_number++;
        } else {
            not_same_number++;
        }
    }
    console.log(same_number);
    if(not_same_number > 95) {
        return true;
    } else {
        return false;
    }
}