import React from 'react';

const Reminders: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Reminders</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Set and manage reminders</p>
      </div>
    </div>
  );
};

export default Reminders;