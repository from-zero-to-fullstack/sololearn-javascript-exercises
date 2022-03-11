function main() {
    //get the initial amount and the interest percentage
    var amount = parseInt(readLine(),10);
    var yearPercent = parseInt(readLine(),10);
    
    var loan1 = new Loan(amount, yearPercent);
    
    //output to console
    console.log(loan1.yearIncome());
}

function Loan(amount, percent) {
    this.amount = amount;
    this.yearPercent = percent;
    //your code goes here
    
};

function calcYearIncome(){
    //complete the function to calculate yearly income
    
}