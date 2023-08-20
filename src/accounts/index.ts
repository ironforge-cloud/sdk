import { accountsAggregate, AccountsAggregateConfig } from './aggregate'
import { accountsFilter, AccountsFilterConfig } from './filter'
import {
  accountsFilterByType,
  AccountsFilterByTypeConfig,
} from './filter-by-type'
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

  aggregate(config: AccountsAggregateConfig) {
    return accountsAggregate(this.apiKey, this.host, config)
  }

  filterByType(config: AccountsFilterByTypeConfig) {
    return accountsFilterByType(this.apiKey, this.host, config)
  }

  filter(config: AccountsFilterConfig) {
    return accountsFilter(this.apiKey, this.host, config)
  }

  findOne(config: AccountsFindOneConfig) {
    return accountsFindOne(this.apiKey, this.host, config)
  }

  memcmp(config: AccountsMemcmpConfig) {
    return accountsMemcmp(this.apiKey, this.host, config)
  }
}
