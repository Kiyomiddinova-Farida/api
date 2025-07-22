// Simple SPA router for hash navigation
const routes = {
  '/recipes': renderRecipes,
  '/products': renderProducts,
  '/users': renderUsers,
  '/posts': renderPosts,
};

function setActiveNav(hash) {
  document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
  if (hash === '#/recipes') document.getElementById('nav-home').classList.add('active');
  if (hash === '#/products') document.getElementById('nav-products').classList.add('active');
  if (hash === '#/users') document.getElementById('nav-users').classList.add('active');
  if (hash === '#/posts') document.getElementById('nav-posts').classList.add('active');
}

function showLoader() {
  document.getElementById('main-content').innerHTML = '<div class="loader">Loading...</div>';
}

function showError(msg) {
  document.getElementById('main-content').innerHTML = `<div class="error">${msg}</div>`;
}

async function renderRecipes() {
  showLoader();
  try {
    const res = await fetch('https://dummyjson.com/recipes');
    const data = await res.json();
    document.getElementById('main-content').innerHTML = `
      <section id="recipes-section">
        <h2>Recipes</h2>
        <div id="recipes-list" class="grid">
          ${data.recipes.map(recipe => `
            <div class="recipe-card">
              <div class="card-img-wrap">
                <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
              </div>
              <div class="card-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.cuisine}</p>
                <p><b>Prep:</b> ${recipe.prepTimeMinutes} min</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  } catch (e) {
    showError('Failed to load recipes.');
  }
}

async function renderProducts() {
  showLoader();
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    document.getElementById('main-content').innerHTML = `
      <section id="products-section">
        <h2>Products</h2>
        <div id="recipes-list" class="grid">
          ${data.products.map(product => `
            <div class="recipe-card">
              <div class="card-img-wrap">
                <img src="${product.thumbnail}" alt="${product.title}" loading="lazy" />
              </div>
              <div class="card-content">
                <h3>${product.title}</h3>
                <p>${product.brand}</p>
                <p><b>Price:</b> $${product.price}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  } catch (e) {
    showError('Failed to load products.');
  }
}

async function renderUsers() {
  showLoader();
  try {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    document.getElementById('main-content').innerHTML = `
      <section id="users-section">
        <h2>Users</h2>
        <div id="recipes-list" class="grid">
          ${data.users.map(user => `
            <div class="recipe-card">
              <div class="card-img-wrap">
                <img src="${user.image}" alt="${user.firstName} ${user.lastName}" loading="lazy" />
              </div>
              <div class="card-content">
                <h3>${user.firstName} ${user.lastName}</h3>
                <p>${user.email}</p>
                <p><b>Age:</b> ${user.age}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  } catch (e) {
    showError('Failed to load users.');
  }
}

async function renderPosts() {
  showLoader();
  try {
    const res = await fetch('https://dummyjson.com/posts');
    const data = await res.json();
    document.getElementById('main-content').innerHTML = `
      <section id="posts-section">
        <h2>Posts</h2>
        <div id="recipes-list" class="grid">
          ${data.posts.map(post => `
            <div class="recipe-card">
              <div class="card-content">
                <h3>${post.title}</h3>
                <p>${post.body.slice(0, 100)}...</p>
                <p><b>Tags:</b> ${post.tags.join(', ')}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  } catch (e) {
    showError('Failed to load posts.');
  }
}

function router() {
  const hash = window.location.hash || '#/recipes';
  setActiveNav(hash);
  const route = hash.replace('#', '');
  if (routes[route]) {
    routes[route]();
  } else {
    renderRecipes();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);