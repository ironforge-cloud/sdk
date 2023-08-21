import { AccountsRequestResult } from '../types';
export type AccountsFindOneConfig = {
    cluster: string;
    program: string;
    address: string;
    cacheControl?: string;
};
export declare function accountsFindOne<T = any>(apiKey: string, host: string, config: AccountsFindOneConfig): Promise<{
    result: AccountsRequestResult<T>;
    status: number;
}>;
