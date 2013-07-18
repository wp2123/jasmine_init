function is_4_bits_number_helper(random_number) {
    var str_random_number = random_number.toString();
    if (str_random_number.length == 4) {
        return true;
    }
    else {
        return false;
    }
}