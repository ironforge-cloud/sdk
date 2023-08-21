import { AccountsRequestResultWithMetadata } from '../types';
export type AccountsMemcmpConfig = {
    query: object;
    cluster: string;
    program: string;
    limit: number;
    offset: number;
    cacheControl?: string;
};
export declare function accountsMemcmp<T = any>(apiKey: string, host: string, config: AccountsMemcmpConfig): Promise<{
    result: AccountsRequestResultWithMetadata<T>;
    status: number;
}>;
