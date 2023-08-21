import { AccountsRequestResultWithMetadata } from '../types';
export type AccountsFindByTypeConfig = {
    accountType: string;
    cluster: string;
    program: string;
    limit: number;
    offset: number;
    cacheControl?: string;
};
export declare function accountsFindByType<T = any>(apiKey: string, host: string, config: AccountsFindByTypeConfig): Promise<{
    result: AccountsRequestResultWithMetadata<T>;
    status: number;
}>;
