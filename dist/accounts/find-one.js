import { requestHeaders, tryExtractResultFromResponse } from '../utils';
export async function accountsFindOne(apiKey, host, config) {
    const { cluster, program, address, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/findOne` +
        `/${address}?apiKey=${apiKey}`, {
        headers: requestHeaders({ cacheControl }),
        method: 'GET',
    });
    return tryExtractResultFromResponse(res);
}
//# sourceMappingURL=find-one.js.map