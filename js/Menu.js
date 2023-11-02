// function to check if current array is empty and create a new array for addToCart
function setLocalStorgae()
{
    if (localStorage.getItem("cartItems") === null) 
    {
        var itemToCart = [];
        localStorage.setItem('cartItems',itemToCart);
    }
}

// Items add to cart
function addToCart(itemName) 
{
    if(itemName == "Buffalo Wings")
    { 
        var Buffalo = {name:"Buffalo Wings",image:"img/buffalo.jpg",price:"$8.99"}
        cartItems.push(Buffalo);
    }
    else if(itemName == "BBQ Wings")
    {
        var BBQ = {name:"BBQ Wings",image:"img/BBQWings.jpg",price:"$8.99"}
        cartItems.push(BBQ);
    }
    else if(itemName == "Garlic Parmesean Wings")
    {
        var garlicParm = {name:"Garlic Parmesean Wings",image:"img/GarlicParmesean.jpg",price:"$8.99"}
        cartItems.push(garlicParm);
    }
    else if(itemName == "Carolina Reaper Wings")
    {
        var Reaper = {name:"Carolina Reaper Wings",image:"img/Reaper.png",price:"$8.99"}
        cartItems.push(Reaper);
    }
    else if(itemName == "Cajun Wings")
    {
        var Cajun = {name:"Cajun Wings",image:"img/Cajun.jpg",price:"$8.99"}
        cartItems.push(Cajun);
    }
    else if(itemName == "Ghost Pepper Wings")
    {
        var Ghost = {name:"Ghost Pepper Wings",image:"img/Ghost.jpg",price:"$8.99"}
        cartItems.push(Ghost);
    }
    else if(itemName == "Plain Wings")
    {
        var Plain = {name:"Plain Wings",image:"img/Plain.jpg",price:"$8.99"}
        cartItems.push(Plain);
    }
    else if(itemName == "Wings Combo 1")
    {
        var Combo1 = {name:"Wings Combo 1",image:"img/Combo1.jpg",price:"$29.99"}
        cartItems.push(Combo1);
    }
    else if(itemName == "Wings Combo 2")
    {
        var Combo2 = {name:"Wings Combo 2",image:"img/Combo2.jpg",price:"$19.99"}
        cartItems.push(Combo2);
    }
    else if(itemName == "Wings Combo 3")
    {
        var Combo3 = {name:"Wings Combo 3",image:"img/Combo3.jpg",price:"$13.99"}
        cartItems.push(Combo3);
    }
}

