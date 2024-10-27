const loginform = document.getElementById("loginform");
const regform = document.getElementById("Regform");
const tform = document.getElementById("indi");



function register(){
    regform.style.transform = "translateX(0)";
    loginform.style.transform = "translateX(0)";
    tform.style.transform = "translateX(100px)";
}


function login(){
    regform.style.transform = "translateX(300px)";
    loginform.style.transform = "translateX(300px)";
    tform.style.transform = "translateX(0)";

}



var Menuitem = document.getElementById("MenuItem");
Menuitem.style.maxHeight = "0px";

function openmenu(){
    if(Menuitem.style.maxHeight == "0px"){
        
        Menuitem.style.maxHeight = "100%"
    }
    else{
        Menuitem.style.maxHeight = "0px"
    }
    if (Menuitem.style.maxHeight == "0px")
        {
        document.getElementById("men").src = "/assets/images/menu.png";
    } else {
        document.getElementById("men").src = "/assets/images/close.svg";
    }
}



document.addEventListener("DOMContentLoaded", function() {
var dis = document.getElementById("dis");
var smalldis = document.getElementsByClassName("small-img")
smalldis[0]. onclick = function() {
    dis.src= smalldis[0].src;
}
smalldis[1]. onclick = function() {
    dis.src= smalldis[1].src;
}
smalldis[2]. onclick = function() {
    dis.src= smalldis[2].src;
}
smalldis[3]. onclick = function() {
    dis.src= smalldis[3].src;
}
});




function addToCart(productId, productName, productPrice, quant, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        const newProduct = { id: productId, name: productName, price: productPrice, quantity: quant, imageUrl: imageUrl };
        cart.push(newProduct);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}