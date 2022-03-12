// with separation of concerns approach

/**
 * The main function that will run in the client
 */
function main() {
    const amountInputted = readLine();
    const rateInputted = readLine();

    const amount = parseToFloat(amountInputted);
    const rate = parseToFloat(rateInputted);

    const convertedAmount = convert(amount, rate);

    console.log(convertedAmount);
}

/**
 * This method multiplies an amount with a rate
 * @param {*} amount 
 * @param {*} rate 
 * @returns two decimal places number
 */
function convert(amount, rate) {
    return amount * rate;
}

/**
 * Parses a string to a number.
 * Validates if the string is greater than zero and if it is a valid cast to float
 * @param {*} input 
 */
function parseToFloat(input) {
    try {
        const parsedInput = parseFloat(input, 0);

        if (isNaN(parsedInput) || parsedInput == 0) {
            throw new Exception('You need to input a valid number!')
        }
    }
    catch (ex) {
        throw ex;
    }
}

module.exports = {
    convert,
    parseToFloat
};