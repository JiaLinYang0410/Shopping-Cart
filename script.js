var totalitem = [];
var prices= [];
var title = [];
var image = [];
$(".button").click(function() {
    var name = $(".item").val();
    var price = $(".price").val();
    $(".cart").append(
        '<div class="item"><p>' + name + '</p><p class="money">' + price + '</p></div>'
    );
    totalitem.push(name);
    prices.push(price);
    $(".totalItem").append("<p>" + totalitem.length + "<p>");
    $(".totalItem").text("Number of items in your cart: " + totalitem.length);
    var totalPrice=0;
    prices.forEach(function(p) {
        var priceAsNumber = parseInt(p);
        totalPrice = totalPrice + priceAsNumber;
    $(".totalPrice").text("Total: $" + totalPrice);
    });
});
    $(".buttonTwo").click(function(){
    if(prices.length ===0){
        alert("Your cart is empty!");
    }
    else if(prices.length === 1){
        alert("Thank you! You've check out " + totalitem[0] );
    }
    else{
        alert("Thank you! You've checked out " + totalitem[0] ); 
    }
});
