// -----------------
// AccountsRequestResult
// -----------------

/**
 * The success case of @link AccountsRequestResult.
 */
export type SuccessAccountsRequestResult<T> = {
  error: null | undefined
  data: T
}

/**
 * The failure case of @link AccountsRequestResult.
 */
export type FailureAccountsRequestResult = {
  error: string
  data: null | undefined
}

/**
 * AccountsRequestResult is a union type of the possible results of an accounts
 * request.
 */
export type AccountsRequestResult<T> =
  | SuccessAccountsRequestResult<T>
  | FailureAccountsRequestResult

/**
 * Checks if the given result is a failure result.
 */
export function isFailureResult<T>(
  result: AccountsRequestResult<T>
): result is FailureAccountsRequestResult {
  return result.error != null
}

/**
 * Checks if the given result is a success result.
 */
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

/**
 * Dev environment, used to develop the Ironforge platform.
 */
export const PLATFORM_ENV_DEV = 'dev'

/**
 * Stage environment, used to test the Ironforge platform.
 */
export const PLATFORM_ENV_STAGE = 'stage'

/**
 * Prod environment, used to run the Ironforge platform.
 * This is the environment that all users of the SDK outside of Ironforge should use.
 */
export const PLATFORM_ENV_PROD = 'prod'

/**
 * All possible platform environments.
 */
export const PLATFORM_ENVS = [
  PLATFORM_ENV_DEV,
  PLATFORM_ENV_STAGE,
  PLATFORM_ENV_PROD,
] as const

/**
 * PlatformEnv is a union type of all possible platform environments.
 */
export type PlatformEnv = (typeof PLATFORM_ENVS)[number]
