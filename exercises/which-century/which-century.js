function main() {
    var year = parseInt(readLine(), 10)

    //the output
    var cent = calcCent(year);
    var ceil = ceilnumber(cent);
    console.log(ceil);
}

/**
 * Este método calcula a ano/100
 * @param {*} x 
 * @returns 
 */
function calcCent(x) {
    if (x > 0) {
        return (x / 100);
    } else {
        alert("Insert a valid number greater than zero");
    }

}
/**
 * Este método arredonda o número para cima
 * @param {*} y 
 * @returns 
 */
function ceilnumber(y) {
    return Math.ceil(y);
}

main();