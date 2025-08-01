import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data: users } = useFetch('https://jsonplaceholder.typicode.com/users');
  const { data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts');
  const { data: todos } = useFetch('https://jsonplaceholder.typicode.com/todos');

  const stats = [
    {
      title: 'Users',
      count: users?.length || 0,
      icon: '👥',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Posts',
      count: posts?.length || 0,
      icon: '📝',
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Todos',
      count: todos?.length || 0,
      icon: '✅',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Completed Todos',
      count: todos?.filter(todo => todo.completed).length || 0,
      icon: '🎯',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JSONPlaceholder API Demo
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bu web app JSONPlaceholder API dan ma'lumotlarni olib, 
          foydalanuvchilar, postlar va vazifalar haqida ma'lumot ko'rsatadi.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`${stat.bgColor} rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${stat.textColor}`}>
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.count}
                </p>
              </div>
              <div className="text-3xl">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Mavjud Bo'limlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Users</h3>
            <p className="text-gray-600">
              Foydalanuvchilar ro'yxati va ularning to'liq ma'lumotlari
            </p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Posts</h3>
            <p className="text-gray-600">
              Barcha postlar va ularning tafsilotlari
            </p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Todos</h3>
            <p className="text-gray-600">
              Vazifalar ro'yxati va ularning holati
            </p>
          </div>
        </div>
      </div>

      {/* API Info */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            JSONPlaceholder API
          </h3>
          <p className="text-gray-600 mb-4">
            Bu loyiha JSONPlaceholder API dan ma'lumotlarni oladi va zamonaviy React ilovasi ko'rinishida taqdim etadi.
          </p>
          <a 
            href="https://jsonplaceholder.typicode.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            API Hujjatlari
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;