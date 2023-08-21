import { requestHeaders, tryExtractResultFromResponse } from '../utils';
export async function accountsAggregate(apiKey, host, config) {
    const { query, cluster, program, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/aggregate` + `?apiKey=${apiKey}`, {
        headers: requestHeaders({ cacheControl }),
        body: JSON.stringify(query),
        method: 'POST',
    });
    return tryExtractResultFromResponse(res);
}
//# sourceMappingURL=aggregate.js.map