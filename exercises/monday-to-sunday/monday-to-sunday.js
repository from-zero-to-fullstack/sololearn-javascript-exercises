function main() {
    var year = parseInt(readLine(), 10);
    var month = parseInt(readLine(), 10);
    var day = parseInt(readLine(), 10);

    console.log(getWeekDay(year, month, day));
}

function getWeekDay(year, month, day) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month, day);
    var index = d.getDay();
       //complete the function
    console.log(names[index]);

    //Opção 2:
    // delete var index
    //console.log(names[d.getDay()]);
}
main();