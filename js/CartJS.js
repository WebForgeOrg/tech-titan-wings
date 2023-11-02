//get the array of cartItems from localStorage
var cartItems = localStorage.getItem('cartItems');


//function to add all the items to the cart
function retrieveCartItems() {
    var firstTblRow = document.getElementById("#firstTblRow");
    var lastTblRow = firstTblRow;

    for (var i = 0; i < cartItems.length; i++) {
        lastTblRow.insertAdjacentHTML(
            "afterend",
            "<tr>"
            + "<td>"
            + "<div class=\"cart-info\">"
            + "<img src=\"" + cartItems[i].image + "\" alt=\"\">"
            + "<div>"
            + "<p>BBQ Wings</p>"
            + "<small>Price: $" + cartItems[i].price + "</small>"
            + "<br>"
            + "<a href=\"\">Remove</a>"
            + "</div>"
            + "</div>"
            + "</td>"
            + "<td><input type=\"number\" value=\"1\" min=\"1\"></td>"
            + "<td>$50.00</td>"
            + "</tr>"
        );
    }
}

//function to calculate the subtotal
function getCartSubtotal() {
    var subtotal = 0;
    for (var i = 0; i < cartItems.length; i++) {
        subtotal += cartItems[i].price;
    }
    return subtotal;
}

//function to calculate the tax needed to be added to subtotal
function getCartTax() {
    var salesTaxPct = 0.102
    var tax = getCartSubtotal() * salesTaxPct;
    return tax;
}

//function to add the tax to the subtotal
function getCartTotal() {
    var totalPrice = getCartSubtotal() + getCartTax();
    return totalPrice;
}

//function to add the subtotal, tax, and total to the bottom of the cart
function enterPrices() {
    var subtotalHTML = document.getElementById("#subtotal");
    var taxHTML = document.getElementById("#tax");
    var totalHTML = document.getElementById("#total");

    subtotalHTML.insertAdjacentHTML("<td>$" + getCartSubtotal() + "</td>");
    taxHTML.insertAdjacentHTML("<td>$" + getCartTax() + "</td>");
    totalHTML.insertAdjacentHTML("<td>$" + getCartTotal() + "</td>");
}