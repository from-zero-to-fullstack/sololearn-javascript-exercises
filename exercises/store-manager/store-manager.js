function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    
    //Opção 1
    // for (let i = 0; i < prices.length; i = prices + increase) {
    //    console.log(prices[i]);
    //}

    //Opção 2
    // for (let i = 0; i < prices.length; i + increase) {
    //    console.log(prices[i]);
    //}

    //Opção 3
    // var newPrices = prices.length;
    // for (let i = 0; i < prices.length; i + increase) {
    //    console.log(prices[i]);
    //}
}

//DOCUMENTAÇÃO:
var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}
