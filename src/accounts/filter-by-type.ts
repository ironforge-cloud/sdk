import { requestHeaders, tryExtractResultFromResponse } from '../utils'

export type AccountsFilterByTypeConfig = {
  accountType: string
  query: object
  cluster: string
  program: string
  limit: number
  offset: number
  cacheControl?: string
}

export async function accountsFilterByType(
  apiKey: string,
  config: AccountsFilterByTypeConfig
) {
  const { accountType, query, cluster, program, limit, offset, cacheControl } =
    config

  const res = await fetch(
    `https://dev.accounts.ironforge.network/v1/${cluster}/${program}/filter` +
      `/${accountType}?limit=${limit}&offset=${offset}&apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      body: JSON.stringify(query),
      method: 'POST',
    }
  )
  return tryExtractResultFromResponse(res)
}
