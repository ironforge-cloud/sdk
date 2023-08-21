import { requestHeaders, tryExtractResultFromResponse } from '../utils';
export async function accountsFilterByType(apiKey, host, config) {
    const { accountType, query, cluster, program, limit, offset, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/filter` +
        `/${accountType}?limit=${limit}&offset=${offset}&apiKey=${apiKey}`, {
        headers: requestHeaders({ cacheControl }),
        body: JSON.stringify(query),
        method: 'POST',
    });
    return tryExtractResultFromResponse(res);
}
//# sourceMappingURL=filter-by-type.js.map