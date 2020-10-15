var orders = [
    { amount: 250 },
    { amount: 415 },
    { amount: 100 },
    { amount: 235 },
    { amount: 500 },
]

let totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount
}, 0)

//ES6 version 
let totalAmountES6 = orders.reduce( (sum, order) => sum + order.amount, 0)

console.log(totalAmountES6)