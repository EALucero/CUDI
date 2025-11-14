import { UseCase } from '../types/UseCase'
import { UseCasePayload, UseCaseResult, UseCaseDependencies } from './useCaseTypes'

export async function runUseCase<
  T extends UseCase<any, any, any>
>(
  useCase: T,
  deps: UseCaseDependencies<T>,
  payload: UseCasePayload<T>
): Promise<UseCaseResult<T>> {
  useCase.deps = deps
  return await useCase.execute(payload)
}