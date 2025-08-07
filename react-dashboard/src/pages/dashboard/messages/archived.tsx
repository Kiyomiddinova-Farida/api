import React from 'react'

const MessagesArchived: React.FC = () => {
  return <div className="p-4 rounded bg-white dark:bg-gray-800 shadow">Archived messages</div>
}

export default React.memo(MessagesArchived)