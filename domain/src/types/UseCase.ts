export interface UseCase<Payload = unknown, Result = unknown, Deps = unknown> {
  deps: Deps
  execute(payload: Payload): Promise<Result>
}