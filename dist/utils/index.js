"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsHostForEnv = exports.requestHeaders = exports.tryExtractResultFromResponse = void 0;
const types_1 = require("../types");
async function tryExtractResultFromResponse(res) {
    if (!res.ok) {
        // TODO(thlorenz): PlatformSdkError
        throw new Error(`${res.status} ${res.statusText}`);
    }
    const result = await res.json();
    return { result, status: res.status };
}
exports.tryExtractResultFromResponse = tryExtractResultFromResponse;
const DEFAULT_REQUEST_HEADERS = {
    cacheControl: 'max-age=5',
};
function requestHeaders(headers = {}) {
    const { cacheControl } = { ...DEFAULT_REQUEST_HEADERS, ...headers };
    return {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'x-ironforge-cache-control': cacheControl,
    };
}
exports.requestHeaders = requestHeaders;
function accountsHostForEnv(env) {
    const prefix = env === types_1.PLATFORM_ENV_PROD ? '' : `${env}.`;
    return `${prefix}accounts.ironforge.network`;
}
exports.accountsHostForEnv = accountsHostForEnv;
//# sourceMappingURL=index.js.map