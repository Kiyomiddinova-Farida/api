import useFetch from '../hooks/useFetch';

const Posts = () => {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const { data: users } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-lg font-medium">
          Ma'lumotlarni yuklashda xatolik: {error}
        </div>
      </div>
    );
  }

  // Helper function to get user name
  const getUserName = (userId) => {
    const user = users?.find(u => u.id === userId);
    return user ? user.name : 'Noma\'lum foydalanuvchi';
  };

  const getUserUsername = (userId) => {
    const user = users?.find(u => u.id === userId);
    return user ? user.username : 'unknown';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Postlar
        </h1>
        <p className="text-gray-600">
          Jami {posts?.length || 0} ta post mavjud
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map(post => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-700">Post #{post.id}</p>
                  <p className="text-xs text-gray-500">@{getUserUsername(post.userId)}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-gray-100 px-2 py-1 rounded-full">
                  <span className="text-xs text-gray-600">
                    {getUserName(post.userId)}
                  </span>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                {post.body}
              </p>
            </div>

            {/* Post Footer */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-xs">Like</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-xs">Comment</span>
                  </button>

                  <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span className="text-xs">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;