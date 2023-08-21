import { AccountsSdk } from './accounts';
import { PLATFORM_ENV_PROD } from './types';
import { accountsHostForEnv } from './utils';
export * from './accounts';
export * from './types';
export { accountsHostForEnv } from './utils';
export class IronforgeSdk {
    apiKey;
    _accountsHost;
    constructor(apiKey, env = PLATFORM_ENV_PROD) {
        this.apiKey = apiKey;
        this._accountsHost = accountsHostForEnv(env);
    }
    get accounts() {
        return new AccountsSdk(this.apiKey, this._accountsHost);
    }
}
//# sourceMappingURL=sdk.js.map