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
