import { AccountsRequestResult } from '../types'
import { Cluster, requestHeaders, tryExtractResultFromResponse } from '../utils'

/** Configures the accounts findOne request. */
export type AccountsFindOneConfig = {
  /** The cluster to execute the query on, i.e. mainnet or devnet. */
  cluster: Cluster
  /** The program whose accounts we are querying. */
  program: string
  /** The address of the account to find. */
  address: string
  /** The cache control header to use for the request. */
  cacheControl?: string
}

export async function accountsFindOne<T = any>(
  apiKey: string,
  host: string,
  config: AccountsFindOneConfig
) {
  const { cluster, program, address, cacheControl } = config

  const res = await fetch(
    `https://${host}/v1/${cluster}/${program}/findOne` +
      `/${address}?apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      method: 'GET',
    }
  )
  return tryExtractResultFromResponse<AccountsRequestResult<T>>(res)
}
