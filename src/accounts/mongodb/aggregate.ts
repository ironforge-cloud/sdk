import { AccountsRequestResult, MongoDbAggregateBody } from '../../types'
import {
  Cluster,
  requestHeaders,
  tryExtractResultFromResponse,
} from '../../utils'

/** Configures the accounts request for mongodb. */
export type MongoDbAggregateConfig = {
  /** The request body. */
  body: MongoDbAggregateBody
  /** The cluster to execute the query on, i.e. mainnet or devnet. */
  cluster: Cluster
  /** The program whose accounts we are querying. */
  program: string
  /** The cache control header to use for the request. */
  cacheControl?: string
}

export async function mongoDbAggregate<T = any>(
  apiKey: string,
  host: string,
  config: MongoDbAggregateConfig
) {
  const { body, cluster, program, cacheControl } = config

  const res = await fetch(
    `https://${host}/v1/${cluster}/${program}/mongodb/aggregate` +
      `?apiKey=${apiKey}`,
    {
      headers: requestHeaders({ cacheControl }),
      body: JSON.stringify(body),
      method: 'POST',
    }
  )
  return tryExtractResultFromResponse<AccountsRequestResult<T>>(res)
}
