import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, updateItem, type UpsertItem } from '../features/dataSlice'
import { stopEditing } from '../features/editingSlice'
import type { RootState } from '../features/store'
import { Link, useNavigate } from 'react-router-dom'

export default function About() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const editing = useSelector((s: RootState) => s.editing.itemBeingEdited)

  const [form, setForm] = useState<UpsertItem>({ title: '', description: '' })

  useEffect(() => {
    if (editing) {
      setForm({ id: editing.id, title: editing.title, description: editing.description })
    }
  }, [editing])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (form.title.trim().length === 0) return

    if (form.id) {
      // form is UpsertItem with id, safe to cast to full Item for update
      dispatch(updateItem(form as any))
    } else {
      dispatch(addItem(form))
    }
    dispatch(stopEditing())
    navigate('/')
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">About / Form</h1>
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 bg-white border rounded-md p-4 shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sarlavha"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            className="w-full rounded-md border px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tavsif"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            {form.id ? 'Update' : "Create"}
          </button>
          {form.id && (
            <button
              type="button"
              className="px-4 py-2 rounded-md border"
              onClick={() => {
                setForm({ title: '', description: '' })
                dispatch(stopEditing())
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}