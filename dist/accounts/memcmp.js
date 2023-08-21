"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsMemcmp = void 0;
const utils_1 = require("../utils");
async function accountsMemcmp(apiKey, host, config) {
    const { query, cluster, program, limit, offset, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/memcmp` +
        `?limit=${limit}&offset=${offset}&apiKey=${apiKey}`, {
        headers: (0, utils_1.requestHeaders)({ cacheControl }),
        body: JSON.stringify(query),
        method: 'POST',
    });
    return (0, utils_1.tryExtractResultFromResponse)(res);
}
exports.accountsMemcmp = accountsMemcmp;
//# sourceMappingURL=memcmp.js.map