import React from 'react'

const MessagesSent: React.FC = () => {
  return <div className="p-4 rounded bg-white dark:bg-gray-800 shadow">Sent messages</div>
}

export default React.memo(MessagesSent)