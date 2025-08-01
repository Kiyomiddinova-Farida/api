import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { API_ENDPOINTS } from '../../static/apiConfig';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const RecipeDetail = () => {
  const { id } = useParams();
  const { data: recipe, loading, error } = useApi(API_ENDPOINTS.recipe(id));

  if (loading) return <LoadingSpinner text="Loading recipe details..." />;
  if (error) return <ErrorMessage error={error} />;
  if (!recipe) return <ErrorMessage error="Recipe not found" />;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>→</span>
        <Link to="/recipes" className="hover:text-blue-600">Recipes</Link>
        <span>→</span>
        <span className="text-gray-800 font-semibold">{recipe.name}</span>
      </nav>

      {/* Recipe Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Math.floor(recipe.rating) ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </span>
                ))}
                <span className="ml-2 text-gray-600">({recipe.rating}/5)</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                recipe.difficulty === 'Easy' 
                  ? 'bg-green-100 text-green-800'
                  : recipe.difficulty === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>

          {/* Recipe Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-1">⏱️</div>
              <div className="text-sm text-gray-600">Prep Time</div>
              <div className="font-semibold">{recipe.prepTimeMinutes} min</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-sm text-gray-600">Cook Time</div>
              <div className="font-semibold">{recipe.cookTimeMinutes} min</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl mb-1">👥</div>
              <div className="text-sm text-gray-600">Servings</div>
              <div className="font-semibold">{recipe.servings}</div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.tags?.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Nutrition */}
          {recipe.nutrition && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Nutrition per serving</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Calories: <span className="font-semibold">{recipe.nutrition.calories}</span></div>
                <div>Protein: <span className="font-semibold">{recipe.nutrition.protein}g</span></div>
                <div>Carbs: <span className="font-semibold">{recipe.nutrition.carbohydrates}g</span></div>
                <div>Fat: <span className="font-semibold">{recipe.nutrition.fat}g</span></div>
                <div>Fiber: <span className="font-semibold">{recipe.nutrition.fiber}g</span></div>
                <div>Sugar: <span className="font-semibold">{recipe.nutrition.sugar}g</span></div>
              </div>
            </div>
          )}
        </div>

        {/* Recipe Image */}
        <div className="lg:order-first">
          <div className="aspect-square overflow-hidden rounded-xl">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🥘 Ingredients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipe.ingredients?.map((ingredient, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              <span className="text-gray-800">{ingredient}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍🍳 Instructions</h2>
        <div className="space-y-6">
          {recipe.instructions?.map((instruction, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-gray-800 leading-relaxed">{instruction}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Type */}
      {recipe.mealType && recipe.mealType.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-2">🍽️ Meal Type</h3>
          <div className="flex flex-wrap gap-2">
            {recipe.mealType.map((type, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                {type}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Cuisine */}
      {recipe.cuisine && (
        <div className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">🌍 Cuisine</h3>
          <p className="text-2xl font-bold text-green-700">{recipe.cuisine}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;