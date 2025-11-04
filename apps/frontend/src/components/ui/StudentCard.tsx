type Props = {
  name: string
  studentId: string
  status: 'activo' | 'inactivo'
  onEdit?: () => void
}

export function StudentCard({ name, studentId, status, onEdit }: Props) {
  return (
    <div className="border p-4 rounded shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-muted">ID: {studentId}</p>
        <span className={`text-xs px-2 py-1 rounded ${status === 'activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status}
        </span>
      </div>
      {onEdit && (
        <button onClick={onEdit} className="text-blue-600 hover:underline text-sm">
          Editar
        </button>
      )}
    </div>
  )
}