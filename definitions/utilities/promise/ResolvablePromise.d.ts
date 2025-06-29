/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export type IResolve<T> = (value: T | PromiseLike<T>) => void;
export type IReject = (reason?: any) => void;
export default class ResolvablePromise<T = void> extends Promise<T> {
    readonly resolve: IResolve<T>;
    readonly reject: IReject;
    private _isResolved;
    get isResolved(): boolean;
    constructor(executor?: (resolve: IResolve<T>, reject: IReject) => void);
}
