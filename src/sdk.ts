import { AccountsSdk } from './accounts'
import { PLATFORM_ENV_PROD, PlatformEnv } from './types'
import { accountsHostForEnv } from './utils'

export * from './accounts'
export * from './types'
export { accountsHostForEnv } from './utils'

/**
 * The Ironforge SDK which is used as an entry point to all available SDK methods.
 */
export class IronforgeSdk {
  private readonly _accountsHost: string

  /**
   * Creates a new Ironforge SDK instance.
   * @param apiKey The API key to use for all requests.
   * @param env The environment to use for all requests, only provide this if you work at Ironforge :)
   */
  constructor(
    public apiKey: string,
    env: PlatformEnv = PLATFORM_ENV_PROD
  ) {
    this._accountsHost = accountsHostForEnv(env)
  }

  /**
   * Provides access to the accounts SDK methods.
   */
  get accounts() {
    return new AccountsSdk(this.apiKey, this._accountsHost)
  }
}
