type SuccessAccountsRequestResult<T> = {
    error: null | undefined;
    data: T;
};
type FailureAccountsRequestResult = {
    error: string;
    data: null | undefined;
};
export type AccountsRequestResult<T> = SuccessAccountsRequestResult<T> | FailureAccountsRequestResult;
export declare function isFailureResult<T>(result: AccountsRequestResult<T>): result is FailureAccountsRequestResult;
export declare function isSuccessResult<T>(result: AccountsRequestResult<T>): result is SuccessAccountsRequestResult<T>;
export type AccountsRequestResultWithMetadata<T> = AccountsRequestResult<T[]> & {
    metadata: {
        count: number;
        offset: number;
        limit: number;
        hasMore: boolean;
    };
};
export declare const PLATFORM_ENV_DEV = "dev";
export declare const PLATFORM_ENV_STAGE = "stage";
export declare const PLATFORM_ENV_PROD = "prod";
export declare const PLATFORM_ENVS: readonly ["dev", "stage", "prod"];
export type PlatformEnv = (typeof PLATFORM_ENVS)[number];
export {};
