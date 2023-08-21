import { requestHeaders, tryExtractResultFromResponse } from '../utils';
export async function accountsFindByType(apiKey, host, config) {
    const { accountType, cluster, program, limit, offset, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/find/${accountType}` +
        `?limit=${limit}&offset=${offset}&apiKey=${apiKey}`, {
        headers: requestHeaders({ cacheControl }),
        method: 'GET',
    });
    return tryExtractResultFromResponse(res);
}
//# sourceMappingURL=find-by-type.js.map