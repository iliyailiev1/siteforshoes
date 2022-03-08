let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
console.log(menu);
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 => {
    image_2.addEventListener('click', () => {
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 => {
    image_3.addEventListener('click', () => {
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
 
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add('active');
}
closeCart.onclick = () => {
    cart.classList.remove('active');
}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs =document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
    document.getElementsByClassName('btn-buy')[0]
    .addEventListener('click', buyButtonClicked);
}
function buyButtonClicked(){
    alert('Your order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}


function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
  

function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
        }
        updatetotal();
}
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElemenet;
    var title = document.getElementsByClassName('product-title')[0].innerText;
    var price = document.getElementsByClassName('price')[0].innerText;
    var productImg = document.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = document.getElementsByClassName('cart-product-title');
    for(var i = 0;i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("You have already add this item to cart");
            return;
    }
}
var cartBoxContent = ` 
<img src="${productImg}" alt=" " class="cart-img">
<div class="detail-box">
   <div class="cart-product-title">${title}</div>
   <div class="cart-price">${price}</div>
   <input type="number" value="1" class="cart-quantity">
</div>
<i class="fas fa-trash-alt cart-remove"></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
document
.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem);
document
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change', quantityChanged);
}

function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = document.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = document.getElementsByClassName('cart-price')[0];
        var quantityElement = document.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        total=Math.round(total*100)/100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    } 
