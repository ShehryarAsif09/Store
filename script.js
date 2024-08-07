// Placeholder for future JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for product detail, add to cart, and other interactive features
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This will take you to the product detail page.');
            // Logic for opening the product detail page goes here
        });
    });
});

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
    // Add more products as needed
];

// Load Products on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="view-details" onclick="viewDetails(${product.id})">View Details</button>
        `;
        productGrid.appendChild(productCard);
    });
});

// View Product Details
function viewDetails(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('detail-image').src = product.image;
        document.getElementById('detail-name').innerText = product.name;
        document.getElementById('detail-description').innerText = product.description;
        document.getElementById('detail-price').innerText = product.price;

        // Hide the product list and show the product detail section
        document.getElementById('products-section').style.display = 'none';
        document.getElementById('product-detail-section').style.display = 'block';
    }
}

// Show Home Page
function showHomePage() {
    document.getElementById('products-section').style.display = 'block';
    document.getElementById('product-detail-section').style.display = 'none';
}

// Add to Cart
function addToCart() {
    alert('Product added to cart!');
    // Add logic to handle adding product to cart
}

// Buy Now
function buyNow() {
    alert('Proceed to checkout!');
    // Add logic to handle immediate purchase
}
