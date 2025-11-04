type Props = {
  status: 'activo' | 'inactivo' | 'inscripto' | 'pendiente'
}

export function StatusBadge({ status }: Props) {
  const styles = {
    activo: 'bg-green-100 text-green-700',
    inactivo: 'bg-red-100 text-red-700',
    inscripto: 'bg-blue-100 text-blue-700',
    pendiente: 'bg-yellow-100 text-yellow-700',
  }

  return (
    <span className={`text-xs px-2 py-1 rounded ${styles[status]}`}>
      {status}
    </span>
  )
}