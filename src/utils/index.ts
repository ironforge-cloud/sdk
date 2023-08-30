export * from './cluster'

export async function tryExtractResultFromResponse<T>(
  res: Response
): Promise<{ result: T; status: number }> {
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Status: ${res.status} '${res.statusText}' (${text})`)
  }
  const result: any = await res.json()
  return { result, status: res.status }
}

export type RequestHeaders = {
  cacheControl: string
}
const DEFAULT_REQUEST_HEADERS = {
  cacheControl: 'max-age=5',
}

export function requestHeaders(headers: Partial<RequestHeaders> = {}) {
  const { cacheControl } = { ...DEFAULT_REQUEST_HEADERS, ...headers }

  return {
    'content-type': 'application/json',
    'x-ironforge-cache-control': cacheControl,
  }
}

/**
 * Returns the accounts host for the given environment.
 * @param maybePrefix The prefix use for all requests, provide
 */
export function accountsHostWithPrefix(maybePrefix?: string) {
  const prefix = maybePrefix == null ? '' : `${maybePrefix}.`
  return `${prefix}accounts.ironforge.network`
}

/**
 * Returns the RPC host for the given environment.
 * @param maybePrefix The prefix use for all requests, provide
 */
export function rpcHostWithPrefix(maybePrefix?: string) {
  const prefix = maybePrefix == null ? '' : `${maybePrefix}.`
  return `${prefix}rpc.ironforge.network`
}
