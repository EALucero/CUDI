type Props = {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  error?: string
}

export function FormField({ label, name, value, onChange, error }: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-medium mb-1">{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}