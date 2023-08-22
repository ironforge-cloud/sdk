import { AccountsRequestResultWithMetadata } from '../types'
import { Cluster, requestHeaders, tryExtractResultFromResponse } from '../utils'

/** Configures the accounts findByType request. */
export type AccountsFindByTypeConfig = {
  /** The type of account consider for the query. */
  accountType: string
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

export async function accountsFindByType<T = any>(
  apiKey: string,
  host: string,
  config: AccountsFindByTypeConfig
) {
  const { accountType, cluster, program, limit, offset, cacheControl } = config

  const res = await fetch(
    `https://${host}/v1/${cluster}/${program}/find/${accountType}` +
      `?limit=${limit}&offset=${offset}&apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      method: 'GET',
    }
  )
  return tryExtractResultFromResponse<AccountsRequestResultWithMetadata<T>>(res)
}
