import { AccountsRequestResultWithMetadata } from '../types';
export type AccountsFilterConfig = {
    query: object;
    cluster: string;
    program: string;
    limit: number;
    offset: number;
    cacheControl?: string;
};
export declare function accountsFilter<T = any>(apiKey: string, host: string, config: AccountsFilterConfig): Promise<{
    result: AccountsRequestResultWithMetadata<T>;
    status: number;
}>;
