import { AccountsRequestResult } from '../types'
import { requestHeaders, tryExtractResultFromResponse } from '../utils'

export type AccountsAggregateConfig = {
  query: object
  cluster: string
  program: string
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
