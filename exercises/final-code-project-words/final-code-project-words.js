class Add {
    constructor(...words) {
        this.words = words;
    }
    //your code goes here
    print() {
        let newstring = '$';
        for (let i of this.words) {
            newstring += i + '$';
        }
        console.log(newstring);
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
