import React from "react";

const Skeleton = ({ count = 8 }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(count)
          .fill()
          ?.map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse-slow"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg animate-pulse-slow"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4 animate-pulse-slow"></div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-24 animate-pulse-slow"></div>
                    <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-16 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skeleton;