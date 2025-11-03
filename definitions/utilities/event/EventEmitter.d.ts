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
import { IterableWeakMap } from "@wayward/utilities/collection/map/IterableWeakMap";
import { PriorityMap } from "@wayward/utilities/collection/map/PriorityMap";
export declare enum Priority {
    Lowest = -2000,
    Low = -1000,
    Normal = 0,
    High = 1000,
    Highest = 2000
}
export declare const SYMBOL_SUBSCRIPTIONS: unique symbol;
export declare const SYMBOL_SUPERCLASSES: unique symbol;
export declare const SYMBOL_SUBSCRIPTION_STATE_IDS: unique symbol;
type Abstract<T> = Function & {
    prototype: T;
};
type Constructor<T> = new (...args: any[]) => T;
type ClassOrAbstractClass<T> = Abstract<T> | Constructor<T>;
export interface IEventSubscriberEvents {
    releaseEventSubscriptions(): any;
}
export interface IEventEmitterHost<E> {
    event: IEventEmitter<this | null, E>;
}
export type IEventEmitterHostClass<E> = ClassOrAbstractClass<IEventEmitterHost<E>>;
export type Events<T> = T extends IEventEmitterHost<infer E> ? E : T extends IEventEmitterHostClass<infer E> ? E : never;
export type EventPriorityMapKV = string | Handler<any, any>;
export type EventPriorityMap = PriorityMap<Map<EventPriorityMapKV, EventPriorityMapKV> | IterableWeakMap<EventPriorityMapKV, EventPriorityMapKV>>;
export interface ITrueEventEmitterHostClass<E> extends Class<any> {
    [SYMBOL_SUPERCLASSES]: Array<ITrueEventEmitterHostClass<E>>;
    [SYMBOL_SUBSCRIPTIONS]: Map<any, Map<keyof E, EventPriorityMap>>;
    [SYMBOL_SUBSCRIPTION_STATE_IDS]: Map<keyof E, number>;
}
export interface ISelfSubscribedEmitter<E> {
    [SYMBOL_SUBSCRIPTIONS]: Array<[ISelfSubscribedEmitter<any>, keyof E, string | number | symbol, number?]>;
}
type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
type Handler<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
type WeakHandler<H, F> = WeakRef<Handler<H, F>>;
type UndefinedFromVoid<V> = V extends void ? undefined : V;
export interface IEventEmitter<H = any, E = any> {
    readonly closed?: boolean;
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    /**
     * Emit an event only to the subscribers of this emitter instance.
     */
    emitSelf<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emitFirst<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): UndefinedFromVoid<ReturnOf<E[K]>> | undefined;
    emitFirstDefault<K extends keyof E, D>(event: K, generateDefault: () => D, ...args: ArgsOf<E[K]>): Exclude<ReturnOf<E[K]>, null | undefined> | D;
    emitCollect<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Array<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<Array<(Extract<ReturnOf<E[K]>, Promise<any>> extends Promise<infer R> ? R : never) | Exclude<ReturnOf<E[K]>, Promise<any>>>> & {
        isResolved?: true;
    };
    emitAsyncParallel<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<Array<(Extract<ReturnOf<E[K]>, Promise<any>> extends Promise<infer R> ? R : never) | Exclude<ReturnOf<E[K]>, Promise<any>>>> & {
        isResolved?: true;
    };
    subscribe<K extends ArrayOr<keyof E>>(this: IEventEmitter<IEventEmitterHost<IEventSubscriberEvents>, E>, host: IEventEmitterHost<IEventSubscriberEvents>, event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number, once?: boolean): H;
    /** @deprecated */
    subscribe<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number, once?: boolean): H;
    subscribeUnsafe<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number, once?: boolean): H;
    subscribeNext<K extends ArrayOr<keyof E>>(this: IEventEmitter<IEventEmitterHost<IEventSubscriberEvents>, E>, host: IEventEmitterHost<IEventSubscriberEvents>, event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    /** @deprecated */
    subscribeNext<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    subscribeNextUnsafe<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    unsubscribe<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): boolean;
    waitFor<K extends ArrayOr<keyof E>>(events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    race<K extends ArrayOr<keyof E>>(raceWith: Promise<any>, events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    race<K extends ArrayOr<keyof E>>(ms: number, events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): IUntilSubscriber<H, E>;
    until(promise: Promise<any>): IUntilSubscriber<H, E>;
    hasHandlersForEvent(...events: Array<keyof E>): boolean;
    setMaxExpectedSubscriptions(event: keyof E, max: number): this;
    /**
     * Re-opens a closed event emitter
     */
    open(): void;
    /**
     * Closes an event emitter, which will prevent any further subscriptions from being made.
     */
    close(): void;
}
export interface IUntilSubscriber<H, E> {
    until(promise: Promise<any>): this;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): this;
    subscribe<K extends ArrayOr<keyof E>>(host: IEventEmitterHost<IEventSubscriberEvents>, event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    /** @deprecated */
    subscribe<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    subscribeUnsafe<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    subscribeNext<K extends ArrayOr<keyof E>>(host: IEventEmitterHost<IEventSubscriberEvents>, event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    /** @deprecated */
    subscribeNext<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    subscribeNextUnsafe<K extends ArrayOr<keyof E>>(event: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
}
declare class EventEmitter<H, E> {
    private readonly host;
    private readonly hostClass;
    /**
     * We're not always initializing these since they're not always needed.
     */
    private subscriptions?;
    private cachedEmitSelfHandlers?;
    private cachedClassHandlers?;
    /**
     * Set to true when the event emitted is closed.
     * This means no more events will be emitted and no more subscriptions can be made.
     * Public so that the interface can expose a readonly version of this.
     */
    closed?: boolean;
    constructor(host: H);
    /**
     * Re-opens a closed event emitter
     */
    open(): void;
    /**
     * Closes an event emitter, which will prevent any further subscriptions from being made.
     */
    close(): void;
    /**
     * @returns True if closed
     */
    private throwErrorIfClosed;
    raw(): IEventEmitter<H, E>;
    emitSelf<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emitFirst<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): UndefinedFromVoid<ReturnOf<E[K]>> | undefined;
    emitFirstDefault<K extends keyof E, D>(event: K, generateDefault: () => D, ...args: ArgsOf<E[K]>): Exclude<ReturnOf<E[K]>, null | undefined> | D;
    emitCollect<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Array<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<any[]>;
    emitAsyncParallel<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<any[]>;
    subscribeUnsafe<K extends ArrayOr<keyof E>>(events: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number, once?: boolean): H;
    subscribe<K extends ArrayOr<keyof E>>(host: IEventEmitterHost<IEventSubscriberEvents>, events: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number, once?: boolean): H;
    /** @deprecated */
    subscribe<K extends ArrayOr<keyof E>>(events: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number, once?: boolean): H;
    private readonly maxExpectedSubscriptionsMap;
    setMaxExpectedSubscriptions(event: keyof E, max: number): this;
    private subscribeInternal;
    subscribeNextUnsafe<K extends ArrayOr<keyof E>>(events: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    subscribeNext<K extends ArrayOr<keyof E>>(host: IEventEmitterHost<IEventSubscriberEvents>, events: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    /** @deprecated */
    subscribeNext<K extends ArrayOr<keyof E>>(events: K, handler: Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): H;
    unsubscribe<K extends ArrayOr<keyof E>>(events: K, handler: keyof H | Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>, priority?: number): boolean;
    waitFor<K extends ArrayOr<keyof E>>(events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    race<K extends ArrayOr<keyof E>>(raceWith: number | Promise<any>, events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): IUntilSubscriber<H, E>;
    until(promise: Promise<any>): IUntilSubscriber<H, E>;
    hasHandlersForEvent(...events: Array<keyof E>): boolean;
    private copyFrom;
    protected handlersForEvent<K extends keyof E>(event: K, ignoreClassSubscriptions?: true): Array<keyof H | WeakHandler<any, any>>;
    /**
     * Deletes an event from the cached handler maps and deletes the maps if they are empty.
     */
    private deleteCachedHandler;
}
declare namespace EventEmitter {
    class Host<E> implements IEventEmitterHost<E> {
        readonly event: IEventEmitter<this, E>;
    }
}
export default EventEmitter;
