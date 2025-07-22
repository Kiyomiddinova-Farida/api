// Global variables
let allPosts = [];
let filteredPosts = [];
let currentPage = 0;
const postsPerPage = 12;
let allTags = [];

// DOM elements
const postsContainer = document.getElementById('posts-list');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const loadMoreBtn = document.getElementById('load-more');
const searchInput = document.getElementById('post-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortFilter = document.getElementById('sort-filter');
const tagsFilter = document.getElementById('tags-filter');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
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
    
    // Sort and tags filter
    sortFilter.addEventListener('change', handleSort);
    tagsFilter.addEventListener('change', handleTagFilter);
    
    // Load more button
    loadMoreBtn.addEventListener('click', loadMorePosts);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// Load posts from API
async function loadPosts() {
    try {
        showLoading();
        const response = await fetch('https://dummyjson.com/posts?limit=100');
        const data = await response.json();
        
        allPosts = data.posts;
        filteredPosts = [...allPosts];
        
        // Extract all tags
        allTags = [...new Set(allPosts.flatMap(post => post.tags || []))].sort();
        populateTags();
        
        hideLoading();
        displayPosts();
        
    } catch (error) {
        console.error('Error loading posts:', error);
        showError();
    }
}

// Populate tags filter
function populateTags() {
    tagsFilter.innerHTML = '<option value="all">All Tags</option>';
    allTags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
        tagsFilter.appendChild(option);
    });
}

// Display posts
function displayPosts() {
    if (filteredPosts.length === 0) {
        postsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-blog"></i>
                <h3>No posts found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(0, endIndex);
    
    postsContainer.innerHTML = postsToShow.map(post => createPostCard(post)).join('');
    
    // Show/hide load more button
    if (endIndex < filteredPosts.length) {
        loadMoreBtn.style.display = 'inline-flex';
    } else {
        loadMoreBtn.style.display = 'none';
    }
    
    // Add fade-in animation
    const cards = postsContainer.querySelectorAll('.post-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create post card HTML
function createPostCard(post) {
    const wordCount = post.body ? post.body.split(' ').length : 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200)); // Average reading speed
    
    return `
        <div class="post-card">
            <div class="card-content">
                <div class="post-header">
                    <div class="post-author">
                        <i class="fas fa-user-circle"></i>
                        <span>User ${post.userId}</span>
                    </div>
                    <div class="post-id">#${post.id}</div>
                </div>
                <h3 class="card-title">${post.title}</h3>
                <p class="card-description">${post.body}</p>
                <div class="card-tags">
                    ${post.tags?.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('') || ''}
                </div>
                <div class="post-stats">
                    <div class="stat">
                        <i class="fas fa-heart"></i>
                        <span>${post.reactions?.likes || 0}</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-thumbs-down"></i>
                        <span>${post.reactions?.dislikes || 0}</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-eye"></i>
                        <span>${post.views || Math.floor(Math.random() * 1000) + 100}</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-clock"></i>
                        <span>${readTime} min read</span>
                    </div>
                </div>
                <div class="post-actions">
                    <button class="btn btn-primary like-post" data-id="${post.id}">
                        <i class="fas fa-heart"></i> Like
                    </button>
                    <button class="btn btn-secondary share-post" data-id="${post.id}">
                        <i class="fas fa-share"></i> Share
                    </button>
                    <button class="btn btn-secondary read-more" data-id="${post.id}">
                        <i class="fas fa-book-open"></i> Read More
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
function handleFilter(event) {
    const filterValue = event.target.dataset.filter;
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    applyFilters();
}

// Handle tag filter
function handleTagFilter() {
    applyFilters();
}

// Apply all filters
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    const selectedTag = tagsFilter.value;
    
    filteredPosts = allPosts.filter(post => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            post.title.toLowerCase().includes(searchTerm) ||
            post.body.toLowerCase().includes(searchTerm) ||
            post.tags?.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Category filter
        const matchesFilter = checkPostFilter(post, activeFilter);
        
        // Tags filter
        const matchesTag = selectedTag === 'all' || post.tags?.includes(selectedTag);
        
        return matchesSearch && matchesFilter && matchesTag;
    });
    
    currentPage = 0;
    handleSort();
}

// Check post filter
function checkPostFilter(post, filter) {
    switch(filter) {
        case 'popular':
            return (post.reactions?.likes || 0) > 5;
        case 'recent':
            return post.id > 75; // Simulate recent posts
        default:
            return true;
    }
}

// Handle sorting
function handleSort() {
    const sortValue = sortFilter.value;
    
    switch(sortValue) {
        case 'id':
            filteredPosts.sort((a, b) => b.id - a.id);
            break;
        case 'title':
            filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'reactions':
            filteredPosts.sort((a, b) => (b.reactions?.likes || 0) - (a.reactions?.likes || 0));
            break;
        case 'views':
            filteredPosts.sort((a, b) => (b.views || 0) - (a.views || 0));
            break;
    }
    
    displayPosts();
}

// Load more posts
function loadMorePosts() {
    currentPage++;
    displayPosts();
}

// Utility functions
function showLoading() {
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    postsContainer.style.display = 'none';
}

function hideLoading() {
    loadingElement.style.display = 'none';
    postsContainer.style.display = 'grid';
}

function showError() {
    loadingElement.style.display = 'none';
    errorElement.style.display = 'block';
    postsContainer.style.display = 'none';
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

// Add event listeners for post actions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('like-post') || e.target.closest('.like-post')) {
        const button = e.target.classList.contains('like-post') ? e.target : e.target.closest('.like-post');
        const postId = button.dataset.id;
        likePost(postId, button);
    }
    
    if (e.target.classList.contains('share-post') || e.target.closest('.share-post')) {
        const button = e.target.classList.contains('share-post') ? e.target : e.target.closest('.share-post');
        const postId = button.dataset.id;
        sharePost(postId);
    }
    
    if (e.target.classList.contains('read-more') || e.target.closest('.read-more')) {
        const button = e.target.classList.contains('read-more') ? e.target : e.target.closest('.read-more');
        const postId = button.dataset.id;
        readMore(postId);
    }
});

// Like post functionality
function likePost(postId, button) {
    const post = allPosts.find(p => p.id == postId);
    if (post) {
        // Toggle like state
        if (button.classList.contains('liked')) {
            button.classList.remove('liked');
            button.innerHTML = '<i class="fas fa-heart"></i> Like';
            showNotification('Like removed!');
        } else {
            button.classList.add('liked');
            button.innerHTML = '<i class="fas fa-heart"></i> Liked';
            showNotification('Post liked!');
        }
    }
}

// Share post functionality
function sharePost(postId) {
    const post = allPosts.find(p => p.id == postId);
    if (post) {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.body.substring(0, 100) + '...',
                url: window.location.href + '#post-' + postId
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            const shareUrl = window.location.href + '#post-' + postId;
            navigator.clipboard.writeText(shareUrl).then(() => {
                showNotification('Link copied to clipboard!');
            });
        }
    }
}

// Read more functionality
function readMore(postId) {
    const post = allPosts.find(p => p.id == postId);
    if (post) {
        showPostModal(post);
    }
}

// Show post modal
function showPostModal(post) {
    const modal = document.createElement('div');
    modal.className = 'post-modal-overlay';
    modal.innerHTML = `
        <div class="post-modal">
            <div class="modal-header">
                <h2>${post.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="post-meta">
                    <div class="post-author">
                        <i class="fas fa-user-circle"></i>
                        <span>User ${post.userId}</span>
                    </div>
                    <div class="post-stats">
                        <span><i class="fas fa-heart"></i> ${post.reactions?.likes || 0}</span>
                        <span><i class="fas fa-thumbs-down"></i> ${post.reactions?.dislikes || 0}</span>
                        <span><i class="fas fa-eye"></i> ${post.views || Math.floor(Math.random() * 1000) + 100}</span>
                    </div>
                </div>
                <div class="post-content">
                    <p>${post.body}</p>
                </div>
                <div class="post-tags">
                    ${post.tags?.map(tag => `<span class="tag">${tag}</span>`).join('') || ''}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
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

// Add styles for posts
const style = document.createElement('style');
style.textContent = `
    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #666;
    }
    
    .post-author {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        color: #667eea;
    }
    
    .post-id {
        color: #999;
        font-size: 0.8rem;
    }
    
    .post-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .post-actions .btn {
        flex: 1;
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
    }
    
    .like-post.liked {
        background: #dc3545;
        border-color: #dc3545;
        color: white;
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
    
    .post-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 1rem;
    }
    
    .post-modal {
        background: white;
        border-radius: 20px;
        max-width: 700px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid #eee;
    }
    
    .modal-close {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #999;
    }
    
    .modal-body {
        padding: 1.5rem;
    }
    
    .post-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #eee;
    }
    
    .post-content {
        margin-bottom: 1.5rem;
        line-height: 1.8;
        font-size: 1.1rem;
    }
    
    .post-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
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
    
    @media (max-width: 768px) {
        .post-actions {
            flex-direction: column;
        }
        
        .post-meta {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }
    }
`;
document.head.appendChild(style);