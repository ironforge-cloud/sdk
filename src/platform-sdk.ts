import { AccountsSdk } from './accounts'
import { PLATFORM_ENV_PROD, PlatformEnv } from './types'
import { accountsHostForEnv } from './utils'

export * from './accounts'
export * from './types'
export { accountsHostForEnv } from './utils'

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
