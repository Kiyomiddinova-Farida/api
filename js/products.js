// Global variables
let allProducts = [];
let filteredProducts = [];
let currentPage = 0;
const productsPerPage = 12;
let categories = [];

// DOM elements
const productsContainer = document.getElementById('products-list');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const loadMoreBtn = document.getElementById('load-more');
const searchInput = document.getElementById('product-search');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Filter and sort
    categoryFilter.addEventListener('change', handleFilter);
    priceFilter.addEventListener('change', handleFilter);
    sortFilter.addEventListener('change', handleSort);
    
    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreProducts);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// Load products from API
async function loadProducts() {
    try {
        showLoading();
        
        // Load products and categories
        const [productsResponse, categoriesResponse] = await Promise.all([
            fetch('https://dummyjson.com/products?limit=100'),
            fetch('https://dummyjson.com/products/categories')
        ]);
        
        const productsData = await productsResponse.json();
        const categoriesData = await categoriesResponse.json();
        
        allProducts = productsData.products;
        categories = categoriesData;
        filteredProducts = [...allProducts];
        
        populateCategories();
        hideLoading();
        displayProducts();
        
    } catch (error) {
        console.error('Error loading products:', error);
        showError();
    }
}

// Populate category filter
function populateCategories() {
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.slug;
        option.textContent = category.name;
        categoryFilter.appendChild(option);
    });
}

// Display products
function displayProducts() {
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-shopping-bag"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(0, endIndex);
    
    productsContainer.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Show/hide load more button
    if (endIndex < filteredProducts.length) {
        loadMoreBtn.style.display = 'inline-flex';
    } else {
        loadMoreBtn.style.display = 'none';
    }
    
    // Add fade-in animation
    const cards = productsContainer.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create product card HTML
function createProductCard(product) {
    const discountedPrice = product.price * (1 - product.discountPercentage / 100);
    const hasDiscount = product.discountPercentage > 0;
    
    return `
        <div class="product-card" data-category="${product.category}">
            <img class="card-image" src="${product.thumbnail}" alt="${product.title}" 
                 onerror="this.src='https://via.placeholder.com/300x250/667eea/ffffff?text=Product'">
            <div class="card-content">
                <h3 class="card-title">${product.title}</h3>
                <p class="card-description">${product.description}</p>
                <div class="card-tags">
                    <span class="tag">${product.category}</span>
                    <span class="tag">${product.brand || 'Generic'}</span>
                </div>
                <div class="card-meta">
                    <div class="card-rating">
                        <i class="fas fa-star"></i>
                        <span>${product.rating.toFixed(1)}</span>
                        <span class="review-count">(${product.reviews?.length || 0})</span>
                    </div>
                    <div class="card-price">
                        ${hasDiscount ? `
                            <span class="original-price">$${product.price.toFixed(2)}</span>
                            <span class="discounted-price">$${discountedPrice.toFixed(2)}</span>
                            <span class="discount-badge">${product.discountPercentage.toFixed(0)}% OFF</span>
                        ` : `
                            <span class="current-price">$${product.price.toFixed(2)}</span>
                        `}
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary view-details" data-id="${product.id}">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Handle search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    applyFilters();
}

// Handle filter
function handleFilter() {
    applyFilters();
}

// Apply all filters
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;
    
    filteredProducts = allProducts.filter(product => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.brand?.toLowerCase().includes(searchTerm);
        
        // Category filter
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        // Price filter
        const matchesPrice = checkPriceRange(product.price, selectedPriceRange);
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    currentPage = 0;
    handleSort();
}

// Check price range
function checkPriceRange(price, range) {
    switch(range) {
        case '0-50':
            return price <= 50;
        case '50-100':
            return price > 50 && price <= 100;
        case '100-500':
            return price > 100 && price <= 500;
        case '500+':
            return price > 500;
        default:
            return true;
    }
}

// Handle sorting
function handleSort() {
    const sortValue = sortFilter.value;
    
    switch(sortValue) {
        case 'name':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    displayProducts();
}

// Load more products
function loadMoreProducts() {
    currentPage++;
    displayProducts();
}

// Utility functions
function showLoading() {
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    productsContainer.style.display = 'none';
}

function hideLoading() {
    loadingElement.style.display = 'none';
    productsContainer.style.display = 'grid';
}

function showError() {
    loadingElement.style.display = 'none';
    errorElement.style.display = 'block';
    productsContainer.style.display = 'none';
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add event listeners for product actions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
        const productId = button.dataset.id;
        addToCart(productId);
    }
    
    if (e.target.classList.contains('view-details') || e.target.closest('.view-details')) {
        const button = e.target.classList.contains('view-details') ? e.target : e.target.closest('.view-details');
        const productId = button.dataset.id;
        viewProductDetails(productId);
    }
});

// Add to cart functionality
function addToCart(productId) {
    const product = allProducts.find(p => p.id == productId);
    if (product) {
        // Simulate adding to cart
        showNotification(`${product.title} added to cart!`);
    }
}

// View product details
function viewProductDetails(productId) {
    const product = allProducts.find(p => p.id == productId);
    if (product) {
        // Create modal or redirect to product details
        showProductModal(product);
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Show product modal
function showProductModal(product) {
    // Simple implementation - you can enhance this
    alert(`Product: ${product.title}\nPrice: $${product.price}\nRating: ${product.rating}/5\n\n${product.description}`);
}

// Add styles for products
const style = document.createElement('style');
style.textContent = `
    .product-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .product-actions .btn {
        flex: 1;
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
    }
    
    .original-price {
        text-decoration: line-through;
        color: #999;
        font-size: 0.9rem;
        margin-right: 0.5rem;
    }
    
    .discounted-price {
        color: #dc3545;
        font-weight: 700;
        margin-right: 0.5rem;
    }
    
    .current-price {
        color: #667eea;
        font-weight: 700;
    }
    
    .discount-badge {
        background: #dc3545;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 10px;
        font-size: 0.7rem;
        font-weight: 600;
    }
    
    .review-count {
        color: #666;
        font-size: 0.8rem;
        margin-left: 0.3rem;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        color: #666;
    }
    
    .no-results i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #ccc;
    }
`;
document.head.appendChild(style);