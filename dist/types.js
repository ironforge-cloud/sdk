export function isFailureResult(result) {
    return result.error != null;
}
export function isSuccessResult(result) {
    return result.error == null && result.data != null;
}
// -----------------
// PlatformEnv
// -----------------
export const PLATFORM_ENV_DEV = 'dev';
export const PLATFORM_ENV_STAGE = 'stage';
export const PLATFORM_ENV_PROD = 'prod';
export const PLATFORM_ENVS = [
    PLATFORM_ENV_DEV,
    PLATFORM_ENV_STAGE,
    PLATFORM_ENV_PROD,
];
//# sourceMappingURL=types.js.map