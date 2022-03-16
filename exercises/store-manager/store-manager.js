function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here

    for (let i = 0; i < prices.length; i++) {
        prices[i] += increase;
    }
    console.log(prices);
}

//DOCUMENTAÇÃO:
var myStringArray = ["Hello", "World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}
