"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsAggregate = void 0;
const utils_1 = require("../utils");
async function accountsAggregate(apiKey, host, config) {
    const { query, cluster, program, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/aggregate` + `?apiKey=${apiKey}`, {
        headers: (0, utils_1.requestHeaders)({ cacheControl }),
        body: JSON.stringify(query),
        method: 'POST',
    });
    return (0, utils_1.tryExtractResultFromResponse)(res);
}
exports.accountsAggregate = accountsAggregate;
//# sourceMappingURL=aggregate.js.map