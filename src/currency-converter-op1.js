function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    console.log(convert(amount, rate));
}
function convert() {
    return amount*rate;
}