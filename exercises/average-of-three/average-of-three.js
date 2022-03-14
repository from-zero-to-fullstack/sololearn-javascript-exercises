function main() {
    var num1 = parseInt(readLine(),10);
    var num2 = parseInt(readLine(),10);
    var num3 = parseInt(readLine(),10);  
    var average = avg(num1, num2, num3);    
    //assign the average value to the variable average  
    
    console.log(average);
}

//complete the function
function avg(a, b, c){
        return ((a + b + c)/3);
}