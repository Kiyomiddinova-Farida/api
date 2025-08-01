import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { API_ENDPOINTS } from '../../static/apiConfig';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const { data: product, loading, error } = useApi(API_ENDPOINTS.product(id));

  if (loading) return <LoadingSpinner text="Loading product details..." />;
  if (error) return <ErrorMessage error={error} />;
  if (!product) return <ErrorMessage error="Product not found" />;

  const originalPrice = product.price / (1 - product.discountPercentage / 100);

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>→</span>
        <Link to="/products" className="hover:text-blue-600">Products</Link>
        <span>→</span>
        <span className="text-gray-800 font-semibold">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img
              src={product.images?.[selectedImageIndex] || product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          {product.images && product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {product.brand}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  ⭐
                </span>
              ))}
            </div>
            <span className="text-gray-600">({product.rating}/5)</span>
            {product.reviews && (
              <span className="text-gray-500">• {product.reviews.length} reviews</span>
            )}
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-4xl font-bold text-green-600">${product.price}</span>
              {product.discountPercentage > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-xl text-gray-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                    -{product.discountPercentage}% OFF
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Stock */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Availability:</span>
            <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `In Stock (${product.stock} items)` : 'Out of Stock'}
            </span>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <span className="text-gray-600">SKU:</span>
              <p className="font-semibold">{product.sku}</p>
            </div>
            <div>
              <span className="text-gray-600">Weight:</span>
              <p className="font-semibold">{product.weight}g</p>
            </div>
            {product.dimensions && (
              <>
                <div>
                  <span className="text-gray-600">Dimensions:</span>
                  <p className="font-semibold">
                    {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                  </p>
                </div>
              </>
            )}
            <div>
              <span className="text-gray-600">Warranty:</span>
              <p className="font-semibold">{product.warrantyInformation || 'N/A'}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Add to Cart
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              ❤️
            </button>
          </div>

          {/* Shipping */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">🚚 Shipping Information</h3>
            <p className="text-blue-700 text-sm">{product.shippingInformation || 'Standard shipping available'}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">{review.reviewerName}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{review.comment}</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;