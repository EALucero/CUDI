import { useStudents } from '@services/hooks/useStudents'
import { StudentCard } from '@components/ui/StudentCard'
import { FormField } from '@components/ui/FormField'
import { SubmitButton } from '@components/ui/SubmitButton'
import { EmptyState } from '@components/ui/EmptyState'

export function StudentDashboard() {
  const {
    students,
    loading,
    error,
    form,
    handleChange,
    handleSubmit,
  } = useStudents()

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Gestión de Estudiantes</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Nombre"
          name="name"
          value={form.name}
          onChange={value => handleChange('name', value)}
          error={form.errors.name}
        />
        <FormField
          label="ID del estudiante"
          name="studentId"
          value={form.studentId}
          onChange={value => handleChange('studentId', value)}
          error={form.errors.studentId}
        />
        <SubmitButton loading={loading}>Registrar estudiante</SubmitButton>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4">
        {students.length === 0 ? (
          <EmptyState message="No hay estudiantes registrados aún." />
        ) : (
          students.map(student => (
            <StudentCard
              key={student.id}
              name={student.name}
              studentId={student.id}
              status={student.status}
              onEdit={() => console.log('Editar', student.id)}
            />
          ))
        )}
      </div>
    </div>
  )
}