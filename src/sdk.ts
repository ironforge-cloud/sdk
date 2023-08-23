import { AccountsSdk } from './accounts'
import { accountsHostWithPrefix } from './utils'

export * from './accounts'
export * from './types'
export * from './utils/cluster'
export { accountsHostWithPrefix, rpcHostWithPrefix } from './utils'

/**
 * The Ironforge SDK which is used as an entry point to all available SDK methods.
 */
export class IronforgeSdk {
  private readonly _accountsHost: string

  /**
   * Creates a new Ironforge SDK instance.
   * @param apiKey The API key to use for all requests.
   * @param prefix The prefix to use for all request urls.
   */
  constructor(
    public apiKey: string,
    prefix?: string
  ) {
    this._accountsHost = accountsHostWithPrefix(prefix)
  }

  /**
   * Provides access to the accounts SDK methods.
   */
  get accounts() {
    return new AccountsSdk(this.apiKey, this._accountsHost)
  }
}
