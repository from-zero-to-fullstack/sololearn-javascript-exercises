function main() {
    var r = parseInt(readLine(), 10)
    
    //the output
    console.log(calcCirc(r));
    
}

//complete the function
function calcCirc(r) {
    if (r > 0) {
        return (2 * Math.PI * r);
    } else {
        return (2 * Math.PI * r).toFixed(2);
    }
}

main();