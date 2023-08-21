import { AccountsRequestResultWithMetadata } from '../types';
export type AccountsFilterByTypeConfig = {
    accountType: string;
    query: object;
    cluster: string;
    program: string;
    limit: number;
    offset: number;
    cacheControl?: string;
};
export declare function accountsFilterByType<T = any>(apiKey: string, host: string, config: AccountsFilterByTypeConfig): Promise<{
    result: AccountsRequestResultWithMetadata<T>;
    status: number;
}>;
