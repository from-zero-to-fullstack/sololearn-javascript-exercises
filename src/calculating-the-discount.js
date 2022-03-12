function main() {
    var prodID = "LD1493";
    var price = 1700;
    var discount = 15;
   
    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);
    
    var newPrice = prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + newPrice);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        return this.price - ((discount/100)*this.price);
        
    }
}
main();