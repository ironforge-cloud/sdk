import { accountsAggregate } from './aggregate';
import { accountsFilter } from './filter';
import { accountsFilterByType, } from './filter-by-type';
import { accountsFindByType } from './find-by-type';
import { accountsFindOne } from './find-one';
import { accountsMemcmp } from './memcmp';
export class AccountsSdk {
    apiKey;
    host;
    constructor(apiKey, host) {
        this.apiKey = apiKey;
        this.host = host;
    }
    aggregate(config) {
        return accountsAggregate(this.apiKey, this.host, config);
    }
    filterByType(config) {
        return accountsFilterByType(this.apiKey, this.host, config);
    }
    filter(config) {
        return accountsFilter(this.apiKey, this.host, config);
    }
    findByType(config) {
        return accountsFindByType(this.apiKey, this.host, config);
    }
    findOne(config) {
        return accountsFindOne(this.apiKey, this.host, config);
    }
    memcmp(config) {
        return accountsMemcmp(this.apiKey, this.host, config);
    }
}
//# sourceMappingURL=index.js.map