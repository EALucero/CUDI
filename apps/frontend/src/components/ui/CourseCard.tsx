import { StatusBadge } from './StatusBadge'

type Props = {
  name: string
  code: string
  status: 'activo' | 'inactivo'
  onEdit?: () => void
  
}

export function CourseCard({ name, code, status, onEdit }: Props) {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-muted">Código: {code}</p>
        <StatusBadge status={status} />
      </div>
      {onEdit && (
        <button onClick={onEdit} className="text-blue-600 hover:underline text-sm">
          Editar
        </button>
      )}
    </div>
  )
}