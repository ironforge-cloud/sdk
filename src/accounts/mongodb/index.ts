import { MongoDbAggregateConfig, mongoDbAggregate } from './aggregate'
import { MongoDbFindConfig, mongoDbFind } from './find'

export { MongoDbFindConfig } from './find'
export { MongoDbAggregateConfig } from './aggregate'

/**
 * The MongoDbSDK provides a set of functions for querying
 * Ironforge accounts via MongoDB
 */
export class MongoDbSDK {
  /**
   * Creates a new MongoDB SDK instance.
   * Invoked via the Accounts SDK mongodb property.
   *
   * @param apiKey The API key to use for all requests.
   * @param host The host to use for all requests.
   */
  constructor(
    public readonly apiKey: string,
    public readonly host: string
  ) {}

  /**
   * Query accounts of a program using a MongoDB find query.
   *
   * @template T The expected type of the find result.
   * @returns The result along with the response status.
   */
  find<T = any>(config: MongoDbFindConfig) {
    return mongoDbFind<T>(this.apiKey, this.host, config)
  }

  /**
   * Apply an aggregation pipeline to the accounts of a program using MongoDB aggregation query.
   *
   * @template T The expected type of the aggregation result.
   * @returns The result along with the response status.
   */
  aggregate<T = any>(config: MongoDbAggregateConfig) {
    return mongoDbAggregate<T>(this.apiKey, this.host, config)
  }
}
