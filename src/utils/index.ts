import { PLATFORM_ENV_PROD, PlatformEnv } from '../types'

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
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'x-ironforge-cache-control': cacheControl,
  }
}

/**
 * Returns the accounts host for the given environment.
 * @param env The environment to use for all requests, provide
 * [PLATFORM_ENV_PROD] unless you work at Ironforge :)
 */
export function accountsHostForEnv(env: PlatformEnv) {
  const prefix = env === PLATFORM_ENV_PROD ? '' : `${env}.`
  return `${prefix}accounts.ironforge.network`
}
