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
export { AccountsFindOneConfig } from './find-one'
export { AccountsMemcmpConfig } from './memcmp'

export class AccountsSdk {
  constructor(
    public readonly apiKey: string,
    public readonly host: string
  ) {}

  aggregate<T = any>(config: AccountsAggregateConfig) {
    return accountsAggregate<T>(this.apiKey, this.host, config)
  }

  filterByType<T = any>(config: AccountsFilterByTypeConfig) {
    return accountsFilterByType<T>(this.apiKey, this.host, config)
  }

  filter<T = any>(config: AccountsFilterConfig) {
    return accountsFilter<T>(this.apiKey, this.host, config)
  }

  findByType<T = any>(config: AccountsFindByTypeConfig) {
    return accountsFindByType<T>(this.apiKey, this.host, config)
  }

  findOne<T = any>(config: AccountsFindOneConfig) {
    return accountsFindOne<T>(this.apiKey, this.host, config)
  }

  memcmp<T = any>(config: AccountsMemcmpConfig) {
    return accountsMemcmp<T>(this.apiKey, this.host, config)
  }
}
