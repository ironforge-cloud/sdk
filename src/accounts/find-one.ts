import { requestHeaders, tryExtractResultFromResponse } from '../utils'

export type AccountsFindOneConfig = {
  cluster: string
  program: string
  address: string
  cacheControl?: string
}

export async function accountsFindOne(
  apiKey: string,
  config: AccountsFindOneConfig
) {
  const { cluster, program, address, cacheControl } = config

  const res = await fetch(
    `https://dev.accounts.ironforge.network/v1/${cluster}/${program}/findOne` +
      `/${address}?apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      method: 'GET',
    }
  )
  return tryExtractResultFromResponse(res)
}
