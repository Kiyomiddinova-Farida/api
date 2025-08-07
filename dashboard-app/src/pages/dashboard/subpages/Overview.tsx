import React from 'react';
import { BarChart3, Users, ShoppingBag, TrendingUp } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome to your dashboard overview</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">1,234</h3>
              <p className="text-sm text-gray-600">Total Users</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">5,678</h3>
              <p className="text-sm text-gray-600">Orders</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">$89,123</h3>
              <p className="text-sm text-gray-600">Revenue</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">+12.5%</h3>
              <p className="text-sm text-gray-600">Growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">New user registration</span>
              <span className="text-xs text-gray-400">2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Order #1234 completed</span>
              <span className="text-xs text-gray-400">15 minutes ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Payment received</span>
              <span className="text-xs text-gray-400">1 hour ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 text-left border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              <div className="text-sm font-medium text-gray-900">Add User</div>
              <div className="text-xs text-gray-500">Create new user account</div>
            </button>
            <button className="p-4 text-left border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              <div className="text-sm font-medium text-gray-900">New Order</div>
              <div className="text-xs text-gray-500">Create new order</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;