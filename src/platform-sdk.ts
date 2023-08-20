import { AccountsSdk } from './accounts'

export * from './accounts'

export class PlatformSdk {
  constructor(public apiKey: string) {}

  get accounts() {
    return new AccountsSdk(this.apiKey)
  }
}
