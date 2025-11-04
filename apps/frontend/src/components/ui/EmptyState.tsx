type Props = {
  message: string
}

export function EmptyState({ message }: Props) {
  return (
    <div className="text-center text-muted py-8">
      <p>{message}</p>
    </div>
  )
}