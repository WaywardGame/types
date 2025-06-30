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
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
/**
 * Create a promise that will resolve after `ms`.
 * @param ms The time in milliseconds until the promise will resolve.
 */
export declare function sleep(ms: number): Promise<undefined>;
/**
 * Create a promise that will resolve after `ms`, or when receiving an abort signal.
 * @param ms The time in milliseconds until the promise will resolve.
 * @param signal A signal that will cause the promise to immediately resolve.
 * @returns `true` if the sleep was aborted, and `false` otherwise.
 */
export declare function sleep(ms: number, signal: AbortSignal): Promise<boolean>;
/**
 * Create a promise that will resolve after `ms`, or when receiving an abort signal.
 * @param ms The time in milliseconds until the promise will resolve.
 * @param signal An optional signal that will cause the promise to immediately resolve.
 * @returns `undefined` when not provided an `AbortSignal`.
 * When provided an `AbortSignal`, `true` if the sleep was aborted, and `false` otherwise.
 */
export declare function sleep(ms: number, signal?: AbortSignal): Promise<boolean | undefined>;
/**
 * Call the given `callback` with the given `args`.
 * If the previous call returned a promise that has not resolved or rejected, queue it for after the period ends.
 * If there is already a queued call, do nothing.
 * @param callback The function to call.
 * @param args The parameters to pass to the callback, when called.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 */
export declare function debounce<ARGS extends any[], R>(callback: (...args: ARGS) => Promise<R>, ...args: ARGS): Promise<R>;
/**
 * Call the given `callback` with the given `args`.
 * If the callback has been called within the last `ms` period, queue it for after the period ends.
 * If there is already a queued call, do nothing.
 * @param ms The amount of time that must have passed since the last call.
 * @param callback The function to call.
 * @param args The parameters to pass to the callback, when called.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 * @returns The result from the callback, or, if the callback is queued for after the debounce period,
 * a promise that will return the result from the queued callback call.
 */
export declare function debounce<ARGS extends any[], R>(ms: number, callback: (...args: ARGS) => R, ...args: ARGS): PromiseOr<R>;
/**
 * Schedule a call of the given `callback` with the given `args` after `ms`.
 * When called again when there is already a queued call, reschedule the call for after another `ms` period has passed.
 * @param ms The amount of time that must have passed since the last call.
 * @param scheduled This must be true to use "scheduled" mode.
 * @param callback The function to call.
 * @param args The parameters to pass to the callback, when called.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 * @returns The result from the callback, or, if the callback is queued for after the debounce period,
 * a promise that will return the result from the queued callback call.
 */
export declare function debounce<ARGS extends any[], R>(ms: number, scheduled: true, callback: (...args: ARGS) => R, ...args: ARGS): PromiseOr<R>;
export interface IScheduleHandler<ARGS extends any[]> {
    /**
     * Whether the callback is completed. This is only set to true when the callback is not cancelled.
     */
    readonly completed: boolean;
    /**
     * Whether the callback was cancelled. This is set to true if the callback is cancelled due to an abort signal.
     */
    readonly cancelled: boolean;
    /**
     * Cancel the scheduled call.
     */
    cancel(): void;
    /**
     * Adds a callback for when the call is cancelled. Given the same arguments as parameters as the scheduled callback would have been.
     */
    onCancel(callback: (...args: ARGS) => any): this;
}
/**
 * Schedule the `callback` for the next tick, with `args` as parameters.
 * @param callback The function to call.
 * @param args The parameters to call the callback with.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 * @returns An object containing properties and methods related to this scheduled call.
 */
export declare function schedule<ARGS extends any[]>(callback: (...args: ARGS) => any, ...args: ARGS): IScheduleHandler<ARGS>;
/**
 * Schedule the `callback` to be executed after `ms`, with `args` as parameters.
 * @param ms The time in milliseconds the callback should be executed after.
 * @param callback The function to call.
 * @param args The parameters to call the callback with.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 * @returns An object containing properties and methods related to this scheduled call.
 */
export declare function schedule<ARGS extends any[]>(ms: number, callback: (...args: ARGS) => any, ...args: ARGS): IScheduleHandler<ARGS>;
/**
 * Schedule the `callback` to be executed after `ms`, with `args` as parameters. Cancel if receiving abort signal.
 * @param ms The time in milliseconds the callback should be executed after.
 * @param signal An abort signal that the scheduled call will be cancelled on, when received.
 * @param callback The function to call.
 * @param args The parameters to call the callback with.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 * @returns An object containing properties and methods related to this scheduled call.
 */
export declare function schedule<ARGS extends any[]>(ms: number, signal: AbortSignal, callback: (...args: ARGS) => any, ...args: ARGS): IScheduleHandler<ARGS>;
/**
 * Schedule the `callback` to be executed after `ms`, with `args` as parameters. Cancel if receiving abort signal.
 * @param ms The time in milliseconds the callback should be executed after.
 * @param debounceTime The minimum interval between calls of the callback. If set to `true`, uses `ms`.
 * This uses the {@link debounce} utility internally, so other debounced calls of that function will also prevent scheduled calls.
 * Note that `completed` will be set to true on the returned object even if the debounce skips this call.
 * @param callback The function to call.
 * @param args The parameters to call the callback with.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 * @returns An object containing properties and methods related to this scheduled call.
 */
export declare function schedule<ARGS extends any[]>(ms: number, debounceTime: number | true, callback: (...args: ARGS) => any, ...args: ARGS): IScheduleHandler<ARGS>;
/**
 * Schedule the `callback` to be executed after `ms`, with `args` as parameters. Cancel if receiving abort signal.
 * @param ms The time in milliseconds the callback should be executed after.
 * @param debounceTime The minimum interval between calls of the callback. If set to `true`, uses `ms`.
 * This uses the {@link debounce} utility internally, so other debounced calls of that function will also prevent scheduled calls.
 * Note that `completed` will be set to true on the returned object even if the debounce skips this call.
 * @param signal An abort signal that the scheduled call will be cancelled on, when received.
 * @param callback The function to call.
 * @param args The parameters to call the callback with.
 * **Note that args passed are temporarily held in memory.** WeakRef them if that's relevant.
 * @returns An object containing properties and methods related to this scheduled call.
 */
export declare function schedule<ARGS extends any[]>(ms: number, debounceTime: number | true, signal: AbortSignal, callback: (...args: ARGS) => any, ...args: ARGS): IScheduleHandler<ARGS>;
/**
 * Create an AbortSignal that will be emitted after `ms`.
 * @param ms The time until the signal will be emitted.
 * @param controller An optional existing `AbortController`.
 * @param message An optional custom timeout message.
 */
export declare function timeout(ms: number, controller?: AbortController, message?: string): AbortSignal;
