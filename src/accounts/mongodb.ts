import {
  AccountsMongoDbBody,
  AccountsRequestResult,
  AccountsRequestResultWithMetadata,
} from '../types'
import { Cluster, requestHeaders, tryExtractResultFromResponse } from '../utils'
import { isAggregateRequest } from '../utils/guards'

/** Configures the accounts request for mongodb. */
export type AccountsMongoDbConfig = {
  /** The request body. */
  body: AccountsMongoDbBody
  /** The cluster to execute the query on, i.e. mainnet or devnet. */
  cluster: Cluster
  /** The program whose accounts we are querying. */
  program: string
  /** The cache control header to use for the request. */
  cacheControl?: string
}

export async function accountsMongoDb<T = any>(
  apiKey: string,
  host: string,
  config: AccountsMongoDbConfig
) {
  const { body, cluster, program, cacheControl } = config

  const res = await fetch(
    `https://${host}/v1/${cluster}/${program}/mongodb` + `?apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      body: JSON.stringify(body),
      method: 'POST',
    }
  )
  if (isAggregateRequest(body)) {
    return tryExtractResultFromResponse<AccountsRequestResult<T>>(res)
  } else {
    return tryExtractResultFromResponse<AccountsRequestResultWithMetadata<T>>(
      res
    )
  }
}
