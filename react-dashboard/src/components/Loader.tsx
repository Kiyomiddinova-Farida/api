import React from 'react'

type LoaderProps = { message?: string }

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return <div className="p-6 text-center">{message ?? 'Loading...'}</div>
}

export default React.memo(Loader)