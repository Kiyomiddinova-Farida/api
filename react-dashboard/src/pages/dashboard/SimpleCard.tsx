import React from 'react'

type SimpleCardProps = { title: string }

const SimpleCard: React.FC<SimpleCardProps> = ({ title }) => {
  return <div className="p-4 rounded bg-white dark:bg-gray-800 shadow">{title}</div>
}

export default React.memo(SimpleCard)