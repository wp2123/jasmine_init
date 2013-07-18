function is_have_no_same_characters_helper(random_number) {
    var str_random_number = random_number.toString();
    for(var i = 0, max = str_random_number.length;i < max;i++) {
        if(str_random_number.indexOf(str_random_number[i],i+1) >= 0) {
            return false;
        } else {
            return true;
        }
    }
}