export const API_BASE_URL = 'https://dummyjson.com';

export const API_ENDPOINTS = {
  products: `${API_BASE_URL}/products`,
  product: (id) => `${API_BASE_URL}/products/${id}`,
  recipes: `${API_BASE_URL}/recipes`,
  recipe: (id) => `${API_BASE_URL}/recipes/${id}`,
  users: `${API_BASE_URL}/users`,
  user: (id) => `${API_BASE_URL}/users/${id}`,
  auth: `${API_BASE_URL}/auth/login`
};