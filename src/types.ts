// -----------------
// AccountsRequestResult
// -----------------
type SuccessAccountsRequestResult<T> = {
  error: null | undefined
  data: T
}
type FailureAccountsRequestResult = {
  error: string
  data: null | undefined
}

export type AccountsRequestResult<T> =
  | SuccessAccountsRequestResult<T>
  | FailureAccountsRequestResult

export function isFailureResult<T>(
  result: AccountsRequestResult<T>
): result is FailureAccountsRequestResult {
  return result.error != null
}
export function isSuccessResult<T>(
  result: AccountsRequestResult<T>
): result is SuccessAccountsRequestResult<T> {
  return result.error == null && result.data != null
}

export type AccountsRequestResultWithMetadata<T> = AccountsRequestResult<
  T[]
> & {
  metadata: {
    count: number
    offset: number
    limit: number
    hasMore: boolean
  }
}

// -----------------
// PlatformEnv
// -----------------
export const PLATFORM_ENV_DEV = 'dev'
export const PLATFORM_ENV_STAGE = 'stage'
export const PLATFORM_ENV_PROD = 'prod'
export const PLATFORM_ENVS = [
  PLATFORM_ENV_DEV,
  PLATFORM_ENV_STAGE,
  PLATFORM_ENV_PROD,
] as const
export type PlatformEnv = (typeof PLATFORM_ENVS)[number]
