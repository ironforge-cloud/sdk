"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATFORM_ENVS = exports.PLATFORM_ENV_PROD = exports.PLATFORM_ENV_STAGE = exports.PLATFORM_ENV_DEV = exports.isSuccessResult = exports.isFailureResult = void 0;
function isFailureResult(result) {
    return result.error != null;
}
exports.isFailureResult = isFailureResult;
function isSuccessResult(result) {
    return result.error == null && result.data != null;
}
exports.isSuccessResult = isSuccessResult;
// -----------------
// PlatformEnv
// -----------------
exports.PLATFORM_ENV_DEV = 'dev';
exports.PLATFORM_ENV_STAGE = 'stage';
exports.PLATFORM_ENV_PROD = 'prod';
exports.PLATFORM_ENVS = [
    exports.PLATFORM_ENV_DEV,
    exports.PLATFORM_ENV_STAGE,
    exports.PLATFORM_ENV_PROD,
];
//# sourceMappingURL=types.js.map