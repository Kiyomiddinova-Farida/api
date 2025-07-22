// Global variables
let allRecipes = [];
let filteredRecipes = [];
let currentPage = 0;
const recipesPerPage = 12;

// DOM elements
const recipesContainer = document.getElementById('recipes-list');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const loadMoreBtn = document.getElementById('load-more');
const searchInput = document.getElementById('recipe-search');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadRecipes();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreRecipes);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// Load recipes from API
async function loadRecipes() {
    try {
        showLoading();
        const response = await fetch('https://dummyjson.com/recipes?limit=50');
        const data = await response.json();
        
        allRecipes = data.recipes;
        filteredRecipes = [...allRecipes];
        
        hideLoading();
        displayRecipes();
        
    } catch (error) {
        console.error('Error loading recipes:', error);
        showError();
    }
}

// Display recipes
function displayRecipes() {
    if (filteredRecipes.length === 0) {
        recipesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No recipes found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    const startIndex = currentPage * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const recipesToShow = filteredRecipes.slice(0, endIndex);
    
    recipesContainer.innerHTML = recipesToShow.map(recipe => createRecipeCard(recipe)).join('');
    
    // Show/hide load more button
    if (endIndex < filteredRecipes.length) {
        loadMoreBtn.style.display = 'inline-flex';
    } else {
        loadMoreBtn.style.display = 'none';
    }
    
    // Add fade-in animation
    const cards = recipesContainer.querySelectorAll('.recipe-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create recipe card HTML
function createRecipeCard(recipe) {
    const difficulty = getDifficultyLevel(recipe.difficulty);
    const prepTime = recipe.prepTimeMinutes || 0;
    const cookTime = recipe.cookTimeMinutes || 0;
    const totalTime = prepTime + cookTime;
    
    return `
        <div class="recipe-card" data-difficulty="${recipe.difficulty?.toLowerCase()}">
            <img class="card-image" src="${recipe.image}" alt="${recipe.name}" 
                 onerror="this.src='https://via.placeholder.com/300x250/667eea/ffffff?text=Recipe'">
            <div class="card-content">
                <h3 class="card-title">${recipe.name}</h3>
                <div class="card-tags">
                    ${recipe.tags?.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('') || ''}
                </div>
                <p class="card-description">
                    ${recipe.instructions?.slice(0, 2).join('. ') || 'Delicious recipe with amazing flavors.'}...
                </p>
                <div class="card-meta">
                    <div class="card-rating">
                        <i class="fas fa-star"></i>
                        <span>${recipe.rating || '4.5'}</span>
                    </div>
                    <div class="recipe-info">
                        <span class="time"><i class="fas fa-clock"></i> ${totalTime}min</span>
                        <span class="difficulty ${difficulty.class}">${difficulty.text}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Get difficulty level styling
function getDifficultyLevel(difficulty) {
    switch(difficulty?.toLowerCase()) {
        case 'easy':
            return { text: 'Easy', class: 'easy' };
        case 'medium':
            return { text: 'Medium', class: 'medium' };
        case 'hard':
            return { text: 'Hard', class: 'hard' };
        default:
            return { text: 'Medium', class: 'medium' };
    }
}

// Handle search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredRecipes = [...allRecipes];
    } else {
        filteredRecipes = allRecipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            recipe.cuisine?.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 0;
    displayRecipes();
}

// Handle filter
function handleFilter(event) {
    const filterValue = event.target.dataset.filter;
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (filterValue === 'all') {
        filteredRecipes = [...allRecipes];
    } else {
        filteredRecipes = allRecipes.filter(recipe => 
            recipe.difficulty?.toLowerCase() === filterValue
        );
    }
    
    currentPage = 0;
    displayRecipes();
}

// Load more recipes
function loadMoreRecipes() {
    currentPage++;
    displayRecipes();
}

// Utility functions
function showLoading() {
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    recipesContainer.style.display = 'none';
}

function hideLoading() {
    loadingElement.style.display = 'none';
    recipesContainer.style.display = 'grid';
}

function showError() {
    loadingElement.style.display = 'none';
    errorElement.style.display = 'block';
    recipesContainer.style.display = 'none';
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

// Add some CSS for difficulty levels and other elements
const style = document.createElement('style');
style.textContent = `
    .difficulty.easy { color: #28a745; font-weight: 600; }
    .difficulty.medium { color: #ffc107; font-weight: 600; }
    .difficulty.hard { color: #dc3545; font-weight: 600; }
    
    .recipe-info {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-size: 0.9rem;
    }
    
    .time {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        color: #666;
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
    
    .main-nav {
        display: flex;
    }
    
    @media (max-width: 768px) {
        .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 1rem;
        }
        
        .main-nav ul {
            flex-direction: column;
            gap: 0.5rem;
        }
    }
`;
document.head.appendChild(style);