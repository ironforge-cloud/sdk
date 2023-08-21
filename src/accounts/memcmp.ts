import { AccountsRequestResultWithMetadata } from '../types'
import { requestHeaders, tryExtractResultFromResponse } from '../utils'

export type AccountsMemcmpConfig = {
  query: object
  cluster: string
  program: string
  limit: number
  offset: number
  cacheControl?: string
}

export async function accountsMemcmp<T = any>(
  apiKey: string,
  host: string,
  config: AccountsMemcmpConfig
) {
  const { query, cluster, program, limit, offset, cacheControl } = config

  const res = await fetch(
    `https://${host}/v1/${cluster}/${program}/memcmp` +
      `?limit=${limit}&offset=${offset}&apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      body: JSON.stringify(query),
      method: 'POST',
    }
  )
  return tryExtractResultFromResponse<AccountsRequestResultWithMetadata<T>>(res)
}
