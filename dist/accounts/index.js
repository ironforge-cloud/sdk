"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsSdk = void 0;
const aggregate_1 = require("./aggregate");
const filter_1 = require("./filter");
const filter_by_type_1 = require("./filter-by-type");
const find_by_type_1 = require("./find-by-type");
const find_one_1 = require("./find-one");
const memcmp_1 = require("./memcmp");
class AccountsSdk {
    apiKey;
    host;
    constructor(apiKey, host) {
        this.apiKey = apiKey;
        this.host = host;
    }
    aggregate(config) {
        return (0, aggregate_1.accountsAggregate)(this.apiKey, this.host, config);
    }
    filterByType(config) {
        return (0, filter_by_type_1.accountsFilterByType)(this.apiKey, this.host, config);
    }
    filter(config) {
        return (0, filter_1.accountsFilter)(this.apiKey, this.host, config);
    }
    findByType(config) {
        return (0, find_by_type_1.accountsFindByType)(this.apiKey, this.host, config);
    }
    findOne(config) {
        return (0, find_one_1.accountsFindOne)(this.apiKey, this.host, config);
    }
    memcmp(config) {
        return (0, memcmp_1.accountsMemcmp)(this.apiKey, this.host, config);
    }
}
exports.AccountsSdk = AccountsSdk;
//# sourceMappingURL=index.js.map