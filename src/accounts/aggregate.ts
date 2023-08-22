import { AccountsRequestResult } from '../types'
import { Cluster, requestHeaders, tryExtractResultFromResponse } from '../utils'

/** Configures the accounts aggregate request. */
export type AccountsAggregateConfig = {
  /** The query to execute. */
  query: object
  /** The cluster to execute the query on, i.e. mainnet or devnet. */
  cluster: Cluster
  /** The program whose accounts we are querying. */
  program: string
  /** The cache control header to use for the request. */
  cacheControl?: string
}

export async function accountsAggregate<T = any>(
  apiKey: string,
  host: string,
  config: AccountsAggregateConfig
) {
  const { query, cluster, program, cacheControl } = config

  const res = await fetch(
    `https://${host}/v1/${cluster}/${program}/aggregate` + `?apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      body: JSON.stringify(query),
      method: 'POST',
    }
  )
  return tryExtractResultFromResponse<AccountsRequestResult<T>>(res)
}
