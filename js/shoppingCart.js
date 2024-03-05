import jsonData from '../resources/products.json' assert { type: 'json' };
//console.log(jsonData);

// Collection to store items in the shopping cart
const cartItems = new Map();

// Function to render product listings
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    //const jsonData = products;
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productElement);
    });
}

// Function to fetch and parse JSON data
async function fetchProductData() {
    fetch("../resources/products.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP  error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => renderProducts(data))
        .catch((error) =>
            console.error("Unable to fetch data: ", error));
}

// Function to render shopping cart content
function renderShoppingCart() {
    const shoppingCart = document.getElementById('shopping-cart');
    shoppingCart.innerHTML = '';

    cartItems.forEach((quantity, product) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
    <p>${product.name} - $${product.price} x ${quantity}</p>
    `;
        shoppingCart.appendChild(cartItemElement);
    });
}
let btn1 = document.getElementById("btnAddToCart");
btn1.addEventListener("click", addToCart);
// Function to add a product to the shopping cart
//function addToCart(productId) {
function addToCart() {
    // const product = jsonData.find(p => p.id === productId);
    // console.log(product);


    jsonData.forEach(product => {

        if (product) {
            if (cartItems.has(product)) {
                cartItems.set(product, cartItems.get(product) + 1);
            } else {
                cartItems.set(product, 1);
            }

            // Update the shopping cart display
            renderShoppingCart();
        }
    });

}

// Initialize the page
window.onload = function () {
    fetchProductData();
    // renderProducts();
    // renderShoppingCart();

};
