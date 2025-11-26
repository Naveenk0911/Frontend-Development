const API_URL = "https://fakestoreapi.com/products";
const productContainer = document.getElementById('product-container');

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const products = await response.json();
        
        products.forEach(product => {
            console.log("--------------------");
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            
            createProductCard(product);
        });

    } catch (error) {
        console.error(error);
        if (productContainer) {
             productContainer.innerHTML = '<p class="error-message">Failed to load products. Please try again.</p>';
        } else {
             console.error("Failed to load products. Please try again.");
        }
    }
}

function createProductCard(product) {
    if (!productContainer) return;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const title = document.createElement('h3');
    title.textContent = product.title;

    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    image.loading = 'lazy';
    
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    
    productContainer.appendChild(card);
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayProducts);