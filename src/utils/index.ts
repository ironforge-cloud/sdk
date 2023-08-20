export async function tryExtractResultFromResponse(
  res: Response
): Promise<{ result: any; status: number }> {
  if (!res.ok) {
    // TODO(thlorenz): PlatformSdkError
    throw new Error(`${res.status} ${res.statusText}`)
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

export const PLATFORM_ENV_DEV = 'dev'
export const PLATFORM_ENV_STAGE = 'stage'
export const PLATFORM_ENV_PROD = 'prod'
export const PLATFORM_ENVS = [
  PLATFORM_ENV_DEV,
  PLATFORM_ENV_STAGE,
  PLATFORM_ENV_PROD,
] as const
export type PlatformEnv = (typeof PLATFORM_ENVS)[number]

export function accountsHostForEnv(env: PlatformEnv) {
  const prefix = env === PLATFORM_ENV_PROD ? '' : `${env}.`
  return `${prefix}accounts.ironforge.network`
}
