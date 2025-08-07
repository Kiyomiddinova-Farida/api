import React from 'react'

const OrdersCancelled: React.FC = () => {
  return <div className="p-4 rounded bg-white dark:bg-gray-800 shadow">Cancelled orders</div>
}

export default React.memo(OrdersCancelled)