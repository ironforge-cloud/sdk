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
