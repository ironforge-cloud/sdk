"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IronforgeSdk = exports.accountsHostForEnv = void 0;
const accounts_1 = require("./accounts");
const types_1 = require("./types");
const utils_1 = require("./utils");
__exportStar(require("./accounts"), exports);
__exportStar(require("./types"), exports);
var utils_2 = require("./utils");
Object.defineProperty(exports, "accountsHostForEnv", { enumerable: true, get: function () { return utils_2.accountsHostForEnv; } });
class IronforgeSdk {
    apiKey;
    _accountsHost;
    constructor(apiKey, env = types_1.PLATFORM_ENV_PROD) {
        this.apiKey = apiKey;
        this._accountsHost = (0, utils_1.accountsHostForEnv)(env);
    }
    get accounts() {
        return new accounts_1.AccountsSdk(this.apiKey, this._accountsHost);
    }
}
exports.IronforgeSdk = IronforgeSdk;
//# sourceMappingURL=sdk.js.map