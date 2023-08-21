import { PlatformEnv } from '../types';
export declare function tryExtractResultFromResponse<T>(res: Response): Promise<{
    result: T;
    status: number;
}>;
export type RequestHeaders = {
    cacheControl: string;
};
export declare function requestHeaders(headers?: Partial<RequestHeaders>): {
    'cache-control': string;
    'content-type': string;
    'x-ironforge-cache-control': string;
};
export declare function accountsHostForEnv(env: PlatformEnv): string;
