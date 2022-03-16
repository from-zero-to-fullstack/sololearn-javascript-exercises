function main() {
    var year = parseInt(readLine(), 10)
    
    //the output
    console.log(calcCent(year));
    
}

//complete the function
function calcCent(x){
    return(Math.ceil(x/100));
}

main();