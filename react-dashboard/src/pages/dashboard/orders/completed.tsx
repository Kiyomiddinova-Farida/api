import React from 'react'

const OrdersCompleted: React.FC = () => {
  return <div className="p-4 rounded bg-white dark:bg-gray-800 shadow">Completed orders</div>
}

export default React.memo(OrdersCompleted)