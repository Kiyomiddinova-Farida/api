import React from 'react';

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg">
      <div className="text-6xl mb-4">⚠️</div>
      <h3 className="text-xl font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
      <p className="text-red-600 text-center mb-4">{error}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;