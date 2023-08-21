import { AccountsRequestResultWithMetadata } from '../types'
import { requestHeaders, tryExtractResultFromResponse } from '../utils'

export type AccountsFindByTypeConfig = {
  accountType: string
  cluster: string
  program: string
  limit: number
  offset: number
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
