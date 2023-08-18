import type * as unidici from 'undici'

declare global {
  var fetch: typeof unidici.fetch
  class Request extends unidici.Request {}
  class Response extends unidici.Response {}
}
