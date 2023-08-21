import { AccountsRequestResultWithMetadata } from '../types'
import { requestHeaders, tryExtractResultFromResponse } from '../utils'

export type AccountsFilterConfig = {
  query: object
  cluster: string
  program: string
  limit: number
  offset: number
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
