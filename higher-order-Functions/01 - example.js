//functions are values, just like strings and asign them to variables or be passed to another function (a higher-order function)
var triple = function(x){
    return x * 3
}

var waffle = triple

waffle(30)