// -----------------
// AccountsRequestResult
// -----------------

/**
 * The success case of @link AccountsRequestResult.
 */
export type SuccessAccountsRequestResult<T> = {
  data: T | null
  error: undefined
}

/**
 * The failure case of @link AccountsRequestResult.
 */
export type FailureAccountsRequestResult = {
  error: string
  data: undefined
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

export type MongoDbFindBody = {
  query?: object
  projection?: object
  options?: {
    limit?: number
    skip?: number
    sort?: Sort
  }
}
export type MongoDbAggregateBody = {
  pipeline: Record<string, any>[]
}
