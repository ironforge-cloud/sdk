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
// Body Types
// -----------------
export const SortValues = [
  1,
  -1,
  'asc',
  'desc',
  'ascending',
  'descending',
] as const
export type SortValue = (typeof SortValues)[number]

export type Sort = [string, SortValue][]

export type Pagination = {
  offset?: number
  limit?: number
  sort: Sort
}

// TODO(thlorenz): add proper type if possible
export type Projection = any

export type AccountsFilterBody = {
  filter?: object
  projection?: object
  pagination?: Pagination
}

export type MemcmpFilter =
  | {
      memcmp: {
        offset: number
        bytes: string
      }
    }
  | { dataSize: number }

export type AccountsMemcmpBody = {
  filters: MemcmpFilter[]
  projection?: Projection
  pagination?: Pagination
}

export type AccountsAggregateBody = {
  pipeline: Record<string, any>[]
}
