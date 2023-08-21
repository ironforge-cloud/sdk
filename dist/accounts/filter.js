import { requestHeaders, tryExtractResultFromResponse } from '../utils';
export async function accountsFilter(apiKey, host, config) {
    const { query, cluster, program, limit, offset, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/filter` +
        `?limit=${limit}&offset=${offset}&apiKey=${apiKey}`, {
        headers: requestHeaders({ cacheControl }),
        body: JSON.stringify(query),
        method: 'POST',
    });
    return tryExtractResultFromResponse(res);
}
//# sourceMappingURL=filter.js.map