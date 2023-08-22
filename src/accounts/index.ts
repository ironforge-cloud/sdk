import { accountsAggregate, AccountsAggregateConfig } from './aggregate'
import { accountsFilter, AccountsFilterConfig } from './filter'
import {
  accountsFilterByType,
  AccountsFilterByTypeConfig,
} from './filter-by-type'
import { accountsFindByType, AccountsFindByTypeConfig } from './find-by-type'
import { accountsFindOne, AccountsFindOneConfig } from './find-one'
import { accountsMemcmp, AccountsMemcmpConfig } from './memcmp'

export { AccountsAggregateConfig } from './aggregate'
export { AccountsFilterByTypeConfig } from './filter-by-type'
export { AccountsFilterConfig } from './filter'
export { AccountsFindByTypeConfig } from './find-by-type'
export { AccountsFindOneConfig } from './find-one'
export { AccountsMemcmpConfig } from './memcmp'

/**
 * The Accounts SDK provides a set of functions for querying the Ironforge
 * accounts
 */
export class AccountsSdk {
  /**
   * Creates a new Accounts SDK instance.
   * Invoked via the main SDK accounts property.
   *
   * @param apiKey The API key to use for all requests.
   * @param host The host to use for all requests.
   * @private
   */
  constructor(
    public readonly apiKey: string,
    public readonly host: string
  ) {}

  /**
   * Applies an aggregate function to the accounts of a program.
   *
   * @template T The expected type of the aggregation result.
   * @returns The result along with the response status.
   */
  aggregate<T = any>(config: AccountsAggregateConfig) {
    return accountsAggregate<T>(this.apiKey, this.host, config)
  }

  /**
   * Filters the accounts of a program matching a specific account
   * type.
   *
   * @template T The expected type of the filterByType result.
   * @returns The result along with the response status.
   */
  filterByType<T = any>(config: AccountsFilterByTypeConfig) {
    return accountsFilterByType<T>(this.apiKey, this.host, config)
  }

  /**
   * Filters the accounts of a program.
   *
   * @template T The expected type of the filter result.
   * @returns The result along with the response status.
   */
  filter<T = any>(config: AccountsFilterConfig) {
    return accountsFilter<T>(this.apiKey, this.host, config)
  }

  /**
   * Finds the accounts of a program matching a specific account type.
   *
   * @template T The expected type of the findByType result.
   * @returns The result along with the response status.
   */
  findByType<T = any>(config: AccountsFindByTypeConfig) {
    return accountsFindByType<T>(this.apiKey, this.host, config)
  }

  /**
   * Finds one account of a program with the provided address.
   *
   * @template T The expected type of the findOne result.
   * @returns The result along with the response status.
   */
  findOne<T = any>(config: AccountsFindOneConfig) {
    return accountsFindOne<T>(this.apiKey, this.host, config)
  }

  /**
   * Filters the accounts of a program using a memcmp filter.
   *
   * @template T The expected type of the memcmp result.
   * @returns The result along with the response status.
   */
  memcmp<T = any>(config: AccountsMemcmpConfig) {
    return accountsMemcmp<T>(this.apiKey, this.host, config)
  }
}
