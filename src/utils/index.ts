export async function tryExtractDataFromResponse(
  res: Response
): Promise<{ data: any; status: StatusCode }> {
  if (!res.ok) {
    // TODO(thlorenz): PlatformSdkError
    throw new Error(`${res.status} ${res.statusText}`)
  }
  const data: any = await res.json()
  return { data, status: res.status }
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
