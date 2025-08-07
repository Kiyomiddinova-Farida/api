import React from 'react'

const OrdersPending: React.FC = () => {
  return <div className="p-4 rounded bg-white dark:bg-gray-800 shadow">Pending orders</div>
}

export default React.memo(OrdersPending)