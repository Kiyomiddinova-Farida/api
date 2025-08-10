import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import type { RootState } from '../features/store'
import { removeItem } from '../features/dataSlice'
import { startEditing } from '../features/editingSlice'
import EmptyState from '../components/EmptyState'

export default function Home() {
  const items = useSelector((state: RootState) => state.data.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <Link
          to="/about"
          className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Yangi qo'shish
        </Link>
      </div>

      {items.length === 0 ? (
        <EmptyState message="Hozircha ma'lumot yo'q." />
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="border rounded-md p-4 flex items-start justify-between gap-4 bg-white">
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  className="px-3 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600"
                  onClick={() => {
                    dispatch(startEditing(item))
                    navigate('/about')
                  }}
                >
                  Update
                </button>
                <button
                  className="px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}