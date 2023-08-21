"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsFindByType = void 0;
const utils_1 = require("../utils");
async function accountsFindByType(apiKey, host, config) {
    const { accountType, cluster, program, limit, offset, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/find/${accountType}` +
        `?limit=${limit}&offset=${offset}&apiKey=${apiKey}`, {
        headers: (0, utils_1.requestHeaders)({ cacheControl }),
        method: 'GET',
    });
    return (0, utils_1.tryExtractResultFromResponse)(res);
}
exports.accountsFindByType = accountsFindByType;
//# sourceMappingURL=find-by-type.js.map