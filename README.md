# @ironforge/sdk [![Build+Test+Lint](https://github.com/ironforge-cloud/sdk/actions/workflows/build-test-lint.yml/badge.svg)](https://github.com/ironforge-cloud/sdk/actions/workflows/build-test-lint.yml)

IronForge SDK

[Docs](https://ironforge-cloud.github.io/sdk/docs/)

## Example

```ts
const API_KEY = '<your ironforge API key>'
import { IronforgeSdk } from '@ironforge/sdk'

const sdk = new IronforgeSdk(API_KEY)
const { result, status } = await sdk.accounts.filterByType({
  accountType: 'CandyMachine',
  query: { filter: { 'data.data.price': 250 } },
  cluster: 'devnet',
  program: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
  limit: 2,
  offset: 0,
})

console.log(status) // => 200
console.log(result)
```

## LICENSE

MIT
