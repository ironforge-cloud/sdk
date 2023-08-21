import { PLATFORM_ENV_PROD } from '../types';
export async function tryExtractResultFromResponse(res) {
    if (!res.ok) {
        // TODO(thlorenz): PlatformSdkError
        throw new Error(`${res.status} ${res.statusText}`);
    }
    const result = await res.json();
    return { result, status: res.status };
}
const DEFAULT_REQUEST_HEADERS = {
    cacheControl: 'max-age=5',
};
export function requestHeaders(headers = {}) {
    const { cacheControl } = { ...DEFAULT_REQUEST_HEADERS, ...headers };
    return {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'x-ironforge-cache-control': cacheControl,
    };
}
export function accountsHostForEnv(env) {
    const prefix = env === PLATFORM_ENV_PROD ? '' : `${env}.`;
    return `${prefix}accounts.ironforge.network`;
}
//# sourceMappingURL=index.js.map