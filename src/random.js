function generate_random_number() {
    var random_number = Math.ceil(Math.random()*(9999-1000)+1000);
//    console.log(random_number);
    return make_the_number_has_no_character(random_number);
//    return random_number;
}

function make_the_number_has_no_character(random_number) {
    var str_random_number = random_number.toString();
    for(var i = 0, max = str_random_number.length;i < max;i++) {
        if(str_random_number.indexOf(str_random_number[i],i+1) >= 0) {
            return generate_random_number();
        }
        return random_number
    }
//    for(var i = 0, max = str_random_number.length;i < (max - 1);i++) {
//        for(var j = i + 1;j < max;j++) {
//            if (str_random_number[i] == str_random_number[j]) {
//                console.log(str_random_number[i] == str_random_number[j]);
//                generate_random_number();
//            }
//        }
//    }
}

