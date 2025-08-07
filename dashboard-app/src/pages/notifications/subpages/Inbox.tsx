import React from 'react';

const Inbox: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Notification Inbox</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">View all your notifications</p>
      </div>
    </div>
  );
};

export default Inbox;