import { AccountsAggregateConfig } from './aggregate';
import { AccountsFilterConfig } from './filter';
import { AccountsFilterByTypeConfig } from './filter-by-type';
import { AccountsFindByTypeConfig } from './find-by-type';
import { AccountsFindOneConfig } from './find-one';
import { AccountsMemcmpConfig } from './memcmp';
export { AccountsAggregateConfig } from './aggregate';
export { AccountsFilterByTypeConfig } from './filter-by-type';
export { AccountsFilterConfig } from './filter';
export { AccountsFindByTypeConfig } from './find-by-type';
export { AccountsFindOneConfig } from './find-one';
export { AccountsMemcmpConfig } from './memcmp';
export declare class AccountsSdk {
    readonly apiKey: string;
    readonly host: string;
    constructor(apiKey: string, host: string);
    aggregate<T = any>(config: AccountsAggregateConfig): Promise<{
        result: import("../types").AccountsRequestResult<T>;
        status: number;
    }>;
    filterByType<T = any>(config: AccountsFilterByTypeConfig): Promise<{
        result: import("../types").AccountsRequestResultWithMetadata<T>;
        status: number;
    }>;
    filter<T = any>(config: AccountsFilterConfig): Promise<{
        result: import("../types").AccountsRequestResultWithMetadata<T>;
        status: number;
    }>;
    findByType<T = any>(config: AccountsFindByTypeConfig): Promise<{
        result: import("../types").AccountsRequestResultWithMetadata<T>;
        status: number;
    }>;
    findOne<T = any>(config: AccountsFindOneConfig): Promise<{
        result: import("../types").AccountsRequestResult<T>;
        status: number;
    }>;
    memcmp<T = any>(config: AccountsMemcmpConfig): Promise<{
        result: import("../types").AccountsRequestResultWithMetadata<T>;
        status: number;
    }>;
}
