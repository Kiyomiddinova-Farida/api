export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-md border p-6 text-center text-gray-500 bg-white">{message}</div>
  )
}