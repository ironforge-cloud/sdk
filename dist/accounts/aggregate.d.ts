import { AccountsRequestResult } from '../types';
export type AccountsAggregateConfig = {
    query: object;
    cluster: string;
    program: string;
    cacheControl?: string;
};
export declare function accountsAggregate<T = any>(apiKey: string, host: string, config: AccountsAggregateConfig): Promise<{
    result: AccountsRequestResult<T>;
    status: number;
}>;
