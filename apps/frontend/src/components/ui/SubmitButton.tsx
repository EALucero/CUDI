type Props = {
  loading?: boolean
  disabled?: boolean
  children: string
  onClick?: () => void
}

export function SubmitButton({ loading, disabled, children }: Props) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? 'Cargando...' : children}
    </button>
  )
}