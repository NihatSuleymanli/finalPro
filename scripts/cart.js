let cartItems = [];

function addToCart(event) {
  event.preventDefault();

  let productId = event.target.getAttribute('data-product-id');
  let productBox = document.getElementById(productId);

  let productName = productBox.querySelector('.watch-name').textContent;
  let productPrice = productBox.querySelector('.watch-price').textContent;
  let productImageSrc = productBox.querySelector('.flex-img').src;

  let newItem = {
    id: productId,
    name: productName,
    price: productPrice,
    imageSrc: productImageSrc
  };

  cartItems.push(newItem);

  updateCartUI();
  saveToLocalStorage();
}

function updateCartUI() {
  let cartCounter = document.querySelector('.cart-counter');
  if (cartCounter) {
    cartCounter.textContent = cartItems.length;

    let cartList = document.querySelector('.cart-list');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
      let listItem = document.createElement('li');

      let imgElement = document.createElement('img');
      imgElement.src = item.imageSrc; 
      imgElement.alt = item.name;
      imgElement.style.width = '300px';
      imgElement.style.height = '320px';

      listItem.appendChild(imgElement);

      let textElement = document.createElement('p'); 
      textElement.textContent = item.name; 
      listItem.appendChild(textElement);

      let priceElement = document.createTextNode(` - ${item.price}`);
      listItem.appendChild(priceElement);

      cartList.appendChild(listItem);
    });
  }
}

function saveToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function loadFromLocalStorage() {
  let storedItems = JSON.parse(localStorage.getItem('cartItems'));
  if (storedItems) {
    cartItems = storedItems;
    updateCartUI();
  }
}

function displayCartItems() {
  let cartList = document.querySelector('.cart-list');
  cartList.innerHTML = '';

  cartItems.forEach(item => {
    let listItem = document.createElement('li');

    let imgElement = document.createElement('img');
    imgElement.src = item.imageSrc;
    imgElement.alt = item.name;
    imgElement.style.width = '300px';  
    imgElement.style.height = '320px';

    listItem.appendChild(imgElement);

    let textElement = document.createElement('p'); 
    textElement.textContent = item.name; 
    listItem.appendChild(textElement);

    let priceElement = document.createTextNode(` - ${item.price}`);
    listItem.appendChild(priceElement);

    cartList.appendChild(listItem);
  });
}

function deleteFromCart(event) {
  event.preventDefault();

  let productId = event.target.getAttribute('data-product-id');

  cartItems = cartItems.filter(item => item.id !== productId);

  updateCartUI();
  saveToLocalStorage();
}

document.addEventListener('DOMContentLoaded', function() {
  loadFromLocalStorage();
  displayCartItems();
});

document.querySelectorAll('.add-cart-btn').forEach(button => {
  button.addEventListener('click', addToCart);
});

document.querySelectorAll('.delete-btn').forEach(button => {
  button.addEventListener('click', deleteFromCart);
});
