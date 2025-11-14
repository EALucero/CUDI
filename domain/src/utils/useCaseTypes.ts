import { UseCase } from "../types/UseCase"

export type UseCaseDependencies<TUseCase extends UseCase> =
  TUseCase extends { deps: infer Deps } ? Deps : never

export type UseCasePayload<TUseCase extends UseCase> =
  TUseCase extends { execute(payload: infer P): Promise<any> } ? P : never

export type UseCaseResult<TUseCase extends UseCase> =
  TUseCase extends { execute(payload: any): Promise<infer R> } ? R : never

export type UnionToIntersection<T> = (
  T extends any ? (x: T) => void : never
) extends (x: infer R) => void
  ? R
  : never

export type MergedDependencies<TUseCases extends UseCase<any, any, any>> =
  UnionToIntersection<UseCaseDependencies<TUseCases>>