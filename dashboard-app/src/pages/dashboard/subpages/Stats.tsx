import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Statistics</h1>
        <p className="text-gray-600">Detailed statistics and metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Website Traffic</h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">24,567</div>
          <div className="text-sm text-green-600">+8.2% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Conversion Rate</h3>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">3.4%</div>
          <div className="text-sm text-red-600">-2.1% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Active Users</h3>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">1,892</div>
          <div className="text-sm text-blue-600">+12.5% from last month</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Page Load Time</span>
              <span>1.2s</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Server Response</span>
              <span>0.8s</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Database Query</span>
              <span>0.3s</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;