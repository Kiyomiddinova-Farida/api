// Global variables
let allUsers = [];
let filteredUsers = [];
let currentPage = 0;
const usersPerPage = 12;
let currentView = 'grid';

// DOM elements
const usersContainer = document.getElementById('users-list');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const loadMoreBtn = document.getElementById('load-more');
const searchInput = document.getElementById('user-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortFilter = document.getElementById('sort-filter');
const viewButtons = document.querySelectorAll('.view-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadUsers();
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
    
    // Sort functionality
    sortFilter.addEventListener('change', handleSort);
    
    // View toggle
    viewButtons.forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });
    
    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreUsers);
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }
}

// Load users from API
async function loadUsers() {
    try {
        showLoading();
        const response = await fetch('https://dummyjson.com/users?limit=100');
        const data = await response.json();
        
        allUsers = data.users;
        filteredUsers = [...allUsers];
        
        hideLoading();
        displayUsers();
        
    } catch (error) {
        console.error('Error loading users:', error);
        showError();
    }
}

// Display users
function displayUsers() {
    if (filteredUsers.length === 0) {
        usersContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-users"></i>
                <h3>No users found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    const startIndex = currentPage * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToShow = filteredUsers.slice(0, endIndex);
    
    usersContainer.innerHTML = usersToShow.map(user => createUserCard(user)).join('');
    usersContainer.className = currentView === 'grid' ? 'grid' : 'grid list-view';
    
    // Show/hide load more button
    if (endIndex < filteredUsers.length) {
        loadMoreBtn.style.display = 'inline-flex';
    } else {
        loadMoreBtn.style.display = 'none';
    }
    
    // Add fade-in animation
    const cards = usersContainer.querySelectorAll('.user-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create user card HTML
function createUserCard(user) {
    const fullName = `${user.firstName} ${user.lastName}`;
    const age = user.age;
    const company = user.company?.name || 'Freelancer';
    
    return `
        <div class="user-card" data-gender="${user.gender}">
            <img class="user-avatar card-image" src="${user.image}" alt="${fullName}" 
                 onerror="this.src='https://via.placeholder.com/150x150/667eea/ffffff?text=${user.firstName[0]}${user.lastName[0]}'">
            <div class="card-content">
                <h3 class="card-title">${fullName}</h3>
                <p class="user-title">${user.company?.title || 'Professional'}</p>
                <div class="user-info">
                    <div class="user-detail">
                        <i class="fas fa-envelope"></i>
                        <span>${user.email}</span>
                    </div>
                    <div class="user-detail">
                        <i class="fas fa-phone"></i>
                        <span>${user.phone}</span>
                    </div>
                    <div class="user-detail">
                        <i class="fas fa-birthday-cake"></i>
                        <span>${age} years old</span>
                    </div>
                    <div class="user-detail">
                        <i class="fas fa-building"></i>
                        <span>${company}</span>
                    </div>
                    <div class="user-detail">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${user.address?.city}, ${user.address?.state}</span>
                    </div>
                    <div class="user-detail">
                        <i class="fas fa-graduation-cap"></i>
                        <span>${user.university || 'Self-taught'}</span>
                    </div>
                </div>
                <div class="user-actions">
                    <button class="btn btn-primary contact-user" data-id="${user.id}">
                        <i class="fas fa-message"></i> Contact
                    </button>
                    <button class="btn btn-secondary view-profile" data-id="${user.id}">
                        <i class="fas fa-user"></i> Profile
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Handle search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredUsers = [...allUsers];
    } else {
        filteredUsers = allUsers.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(searchTerm) ||
                   user.email.toLowerCase().includes(searchTerm) ||
                   user.company?.name?.toLowerCase().includes(searchTerm) ||
                   user.address?.city?.toLowerCase().includes(searchTerm) ||
                   user.university?.toLowerCase().includes(searchTerm);
        });
    }
    
    currentPage = 0;
    displayUsers();
}

// Handle filter
function handleFilter(event) {
    const filterValue = event.target.dataset.filter;
    
    // Update active filter button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (filterValue === 'all') {
        filteredUsers = [...allUsers];
    } else {
        filteredUsers = allUsers.filter(user => user.gender === filterValue);
    }
    
    currentPage = 0;
    displayUsers();
}

// Handle sorting
function handleSort() {
    const sortValue = sortFilter.value;
    
    switch(sortValue) {
        case 'firstName':
            filteredUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
            break;
        case 'lastName':
            filteredUsers.sort((a, b) => a.lastName.localeCompare(b.lastName));
            break;
        case 'age':
            filteredUsers.sort((a, b) => a.age - b.age);
            break;
        case 'email':
            filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
            break;
    }
    
    displayUsers();
}

// Handle view toggle
function handleViewToggle(event) {
    const viewValue = event.target.dataset.view;
    
    // Update active view button
    viewButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentView = viewValue;
    displayUsers();
}

// Load more users
function loadMoreUsers() {
    currentPage++;
    displayUsers();
}

// Utility functions
function showLoading() {
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    usersContainer.style.display = 'none';
}

function hideLoading() {
    loadingElement.style.display = 'none';
    usersContainer.style.display = 'grid';
}

function showError() {
    loadingElement.style.display = 'none';
    errorElement.style.display = 'block';
    usersContainer.style.display = 'none';
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

// Add event listeners for user actions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('contact-user') || e.target.closest('.contact-user')) {
        const button = e.target.classList.contains('contact-user') ? e.target : e.target.closest('.contact-user');
        const userId = button.dataset.id;
        contactUser(userId);
    }
    
    if (e.target.classList.contains('view-profile') || e.target.closest('.view-profile')) {
        const button = e.target.classList.contains('view-profile') ? e.target : e.target.closest('.view-profile');
        const userId = button.dataset.id;
        viewUserProfile(userId);
    }
});

// Contact user functionality
function contactUser(userId) {
    const user = allUsers.find(u => u.id == userId);
    if (user) {
        showNotification(`Opening chat with ${user.firstName} ${user.lastName}`);
        // Simulate opening chat
        setTimeout(() => {
            window.open(`mailto:${user.email}?subject=Hello from DummyJSON Explorer`, '_blank');
        }, 1000);
    }
}

// View user profile
function viewUserProfile(userId) {
    const user = allUsers.find(u => u.id == userId);
    if (user) {
        showUserProfileModal(user);
    }
}

// Show user profile modal
function showUserProfileModal(user) {
    const modal = document.createElement('div');
    modal.className = 'user-modal-overlay';
    modal.innerHTML = `
        <div class="user-modal">
            <div class="modal-header">
                <h2>${user.firstName} ${user.lastName}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="user-profile-info">
                    <img src="${user.image}" alt="${user.firstName}" class="profile-avatar">
                    <div class="profile-details">
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Age:</strong> ${user.age} years old</p>
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <p><strong>Company:</strong> ${user.company?.name || 'N/A'}</p>
                        <p><strong>Job Title:</strong> ${user.company?.title || 'N/A'}</p>
                        <p><strong>University:</strong> ${user.university || 'N/A'}</p>
                        <p><strong>Address:</strong> ${user.address?.address}, ${user.address?.city}, ${user.address?.state}</p>
                        <p><strong>Blood Group:</strong> ${user.bloodGroup || 'N/A'}</p>
                        <p><strong>Height:</strong> ${user.height || 'N/A'} cm</p>
                        <p><strong>Weight:</strong> ${user.weight || 'N/A'} kg</p>
                    </div>
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

// Add styles for users
const style = document.createElement('style');
style.textContent = `
    .user-title {
        color: #667eea;
        font-weight: 600;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
    
    .user-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .user-actions .btn {
        flex: 1;
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
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
    
    .user-modal-overlay {
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
    
    .user-modal {
        background: white;
        border-radius: 20px;
        max-width: 600px;
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
    
    .user-profile-info {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
    }
    
    .profile-avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #667eea;
    }
    
    .profile-details {
        flex: 1;
    }
    
    .profile-details p {
        margin-bottom: 0.8rem;
        line-height: 1.4;
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
        .user-profile-info {
            flex-direction: column;
            text-align: center;
        }
        
        .profile-avatar {
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style);