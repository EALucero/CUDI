import { UseCaseName, useCaseRegistry } from './registry'
import { resolveDependencies } from './dependencyResolver'
import { UseCase } from '@domain/types/UseCase'

export async function dispatchUseCase(name: UseCaseName, payload: any): Promise<any> {
  const UseCaseClass = useCaseRegistry[name];
  const deps = resolveDependencies(name);

  const usecase: UseCase = new UseCaseClass() as UseCase;
  usecase.deps = deps;

  return await usecase.execute(payload)
}