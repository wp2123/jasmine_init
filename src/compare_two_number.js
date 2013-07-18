function compare_two_number(number1,number2) {
    var str_number1 = number1.toString();
    var str_number2 = number2.toString();
    var quantity_of_A = 0;
    var quantity_of_B = 0;
    var result = "";
    for(var i = 0, max = str_number1.length; i < max; i++) {
        if(str_number1.charAt(i) == str_number2.charAt(i)) {
            quantity_of_A += 1;
            continue;
        }
        for(var j = 0; j < max;j++) {
            if(str_number1.charAt(i) == str_number2.charAt(j)) quantity_of_B += 1;
        }
    }
    result = quantity_of_A + "A" + quantity_of_B + "B";
    return result;
}
