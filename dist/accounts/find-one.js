"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsFindOne = void 0;
const utils_1 = require("../utils");
async function accountsFindOne(apiKey, host, config) {
    const { cluster, program, address, cacheControl } = config;
    const res = await fetch(`https://${host}/v1/${cluster}/${program}/findOne` +
        `/${address}?apiKey=${apiKey}`, {
        headers: (0, utils_1.requestHeaders)({ cacheControl }),
        method: 'GET',
    });
    return (0, utils_1.tryExtractResultFromResponse)(res);
}
exports.accountsFindOne = accountsFindOne;
//# sourceMappingURL=find-one.js.map