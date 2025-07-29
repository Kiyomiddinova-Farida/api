import React from "react";

const ErrorWidget = ({ text = "Something went wrong :(" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
      <div className="text-center px-6 py-12">
        <div className="mx-auto mb-8 w-64 h-64 relative">
          {/* Error illustration */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute inset-8 bg-gradient-to-br from-red-600 to-pink-700 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Error icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-20 h-20 text-red-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
              />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops!</h2>
        <p className="text-lg text-red-600 mb-8 max-w-md mx-auto">{text}</p>
        
        <button 
          onClick={() => window.location.reload()} 
          className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorWidget;