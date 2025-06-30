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
import type { IReject, IResolve } from "@wayward/utilities/promise/ResolvablePromise";
import ResolvablePromise from "@wayward/utilities/promise/ResolvablePromise";
export default class CancelablePromise<T = void> extends ResolvablePromise<T | undefined> {
    private _cancelled;
    get cancelled(): boolean;
    private readonly cancelCallbacks;
    constructor(executor?: (resolve: IResolve<T>, reject: IReject) => void);
    cancel(): void;
    onCancel(callback: () => void): this;
}
