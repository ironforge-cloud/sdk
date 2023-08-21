import { AccountsSdk } from './accounts';
import { PlatformEnv } from './types';
export * from './accounts';
export * from './types';
export { accountsHostForEnv } from './utils';
export declare class IronforgeSdk {
    apiKey: string;
    private readonly _accountsHost;
    constructor(apiKey: string, env?: PlatformEnv);
    get accounts(): AccountsSdk;
}
