import { AccountsRequestResultWithMetadata } from '../types'
import { Cluster, requestHeaders, tryExtractResultFromResponse } from '../utils'

/** Configures the accounts filter request. */
export type AccountsFilterConfig = {
  /** The query to execute. */
  query: object
  /** The cluster to execute the query on, i.e. mainnet or devnet. */
  cluster: Cluster
  /** The program whose accounts we are querying. */
  program: string
  /** The max amount of accounts to include in the result */
  limit: number
  /** The number of accounts to skip before including them in the result */
  offset: number
  /** The cache control header to use for the request. */
  cacheControl?: string
}

export async function accountsFilter<T = any>(
  apiKey: string,
  host: string,
  config: AccountsFilterConfig
) {
  const { query, cluster, program, limit, offset, cacheControl } = config

  const res = await fetch(
    `https://${host}/v1/${cluster}/${program}/filter` +
      `?limit=${limit}&offset=${offset}&apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      body: JSON.stringify(query),
      method: 'POST',
    }
  )
  return tryExtractResultFromResponse<AccountsRequestResultWithMetadata<T>>(res)
}
