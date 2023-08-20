import { AccountsSdk } from './accounts'
import { PlatformEnv, PLATFORM_ENV_PROD, accountsHostForEnv } from './utils'

export * from './accounts'

export class PlatformSdk {
  private readonly _accountsHost: string
  constructor(
    public apiKey: string,
    env: PlatformEnv = PLATFORM_ENV_PROD
  ) {
    this._accountsHost = accountsHostForEnv(env)
  }

  get accounts() {
    return new AccountsSdk(this.apiKey, this._accountsHost)
  }
}
