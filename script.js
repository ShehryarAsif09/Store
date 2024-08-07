// Product Data
const products = [
    {
        id: 1,
        name: "Classic Glasses",
        image: "images/glasses1.jpg",
        description: "A timeless design that suits every occasion.",
        price: "$99.99"
    },
    {
        id: 2,
        name: "Modern Glasses",
        image: "images/glasses2.png",
        description: "Sleek and stylish glasses for the modern individual.",
        price: "$129.99"
    },
    {
        id: 3,
        name: "Modern Glasses",
        image: "images/glasses3.jpeg",
        description: "Sleek and stylish glasses for the modern individual.",
        price: "$129.99"
    },
    {
        id: 4,
        name: "Modern Glasses",
        image: "images/glasses3.jpeg",
        description: "Sleek and stylish glasses for the modern individual.",
        price: "$129.99"
    },
    {
        id: 5,
        name: "Modern Glasses",
        image: "images/glasses3.jpeg",
        description: "Sleek and stylish glasses for the modern individual.",
        price: "$129.99"
    },
    {
        id: 6,
        name: "Modern Glasses",
        image: "images/glasses3.jpeg",
        description: "Sleek and stylish glasses for the modern individual.",
        price: "$129.99"
    },
    {
        id: 7,
        name: "Modern Glasses",
        image: "images/glasses3.jpeg",
        description: "Sleek and stylish glasses for the modern individual.",
        price: "$129.99"
    },
    // Add more products as needed
];

let cart = [];

// Load Products on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="viewProduct(${product.id})">View Details</button>
        `;
        productGrid.appendChild(productCard);
    });
});

// View Product Details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-description').innerText = product.description;
    document.getElementById('detail-price').innerText = product.price;
    showProductDetailPage();
}

// Show Product Detail Page
function showProductDetailPage() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('products-section').style.display = 'none';
    document.getElementById('product-detail-section').style.display = 'block';
}

// Add to Cart
function addToCart() {
    const productName = document.getElementById('detail-name').innerText;
    const productPrice = document.getElementById('detail-price').innerText;
    const productImage = document.getElementById('detail-image').src;
    cart.push({ name: productName, price: productPrice, image: productImage });
    alert(`${productName} has been added to your cart.`);
}

// Buy Now (Similar to Add to Cart, but redirects to checkout)
function buyNow() {
    addToCart();
    showCartPage();
}

// Show Cart Page
function showCartPage() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('products-section').style.display = 'none';
    document.getElementById('product-detail-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'block';

    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.price}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Show Home Page
function showHomePage() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('products-section').style.display = 'block';
    document.getElementById('product-detail-section').style.display = 'none';
    document.getElementById('cart-section').style.display = 'none';
}

// Checkout Function
function checkout(event) {
    event.preventDefault();
    alert("Thank you for your purchase!");
    cart = [];  // Clear cart after checkout
    showHomePage();
}
