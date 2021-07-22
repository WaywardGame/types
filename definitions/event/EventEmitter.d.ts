/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { PriorityMap } from "utilities/collection/map/PriorityMap";
export declare enum Priority {
    Lowest = -2000,
    Low = -1000,
    Normal = 0,
    High = 1000,
    Highest = 2000
}
export declare const SYMBOL_SUBSCRIPTIONS: unique symbol;
export declare const SYMBOL_SUPERCLASSES: unique symbol;
declare type Abstract<T> = Function & {
    prototype: T;
};
declare type Constructor<T> = new (...args: any[]) => T;
declare type ClassOrAbstractClass<T> = Abstract<T> | Constructor<T>;
export interface IEventEmitterHost<E> {
    event: IEventEmitter<this, E>;
}
export declare type IEventEmitterHostClass<E> = ClassOrAbstractClass<IEventEmitterHost<E>>;
export declare type Events<T> = T extends IEventEmitterHost<infer E> ? E : T extends IEventEmitterHostClass<infer E> ? E : never;
export interface ITrueEventEmitterHostClass<E> extends Class<any> {
    [SYMBOL_SUPERCLASSES]: Array<ITrueEventEmitterHostClass<E>>;
    [SYMBOL_SUBSCRIPTIONS]: Map<any, Map<keyof E, PriorityMap<Set<Iterable<string | Handler<any, any>>>>>>;
}
export interface ISelfSubscribedEmitter<E> {
    [SYMBOL_SUBSCRIPTIONS]: Array<[ISelfSubscribedEmitter<any>, keyof E, string | number | symbol, number?]>;
}
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type Handler<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
declare type UndefinedFromVoid<V> = V extends void ? undefined : V;
export interface IEventEmitter<H = any, E = any> {
    event: IEventEmitter<this, IEventEmitterEvents<H, E>>;
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emitFirst<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): UndefinedFromVoid<ReturnOf<E[K]>> | undefined;
    emitFirstDefault<K extends keyof E, D>(event: K, generateDefault: () => D, ...args: ArgsOf<E[K]>): Exclude<ReturnOf<E[K]>, null | undefined> | D;
    emitStream<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Stream<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Promise<Stream<(Extract<ReturnOf<E[K]>, Promise<any>> extends Promise<infer R> ? R : never) | Exclude<ReturnOf<E[K]>, Promise<any>>>> & {
        isResolved?: true;
    };
    subscribe<K extends ArrayOr<keyof E>>(event: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): H;
    unsubscribe<K extends ArrayOr<keyof E>>(event: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): boolean;
    waitFor<K extends ArrayOr<keyof E>>(events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): IUntilSubscriber<H, E>;
    until(promise: Promise<any>): IUntilSubscriber<H, E>;
    hasHandlersForEvent(...events: Array<keyof E>): boolean;
}
interface IUntilSubscriber<H, E> {
    subscribe<K extends ArrayOr<keyof E>>(event: K, handler: IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): H;
}
interface IEventEmitterEvents<H, E> {
    subscribe<K extends keyof E>(event: keyof E, handler: Iterable<(keyof H) | Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>): any;
    unsubscribe<K extends keyof E>(event: keyof E, handler: Iterable<(keyof H) | Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>): any;
}
declare class EventEmitter<H, E> implements IEventEmitter<H, E> {
    private readonly host;
    private readonly hostClass;
    private readonly subscriptions;
    private eventEmitterMeta?;
    get event(): IEventEmitter<this, IEventEmitterEvents<H, E>>;
    constructor(host: H);
    emit<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): H;
    emitFirst<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): any;
    emitFirstDefault<K extends keyof E, D>(event: K, generateDefault: () => D, ...args: ArgsOf<E[K]>): any;
    emitStream<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): Stream<ReturnOf<E[K]>>;
    emitReduce<K extends keyof E, A extends ReturnOf<E[K]> & Head<ArgsOf<E[K]>>>(event: K, arg: A, ...args: Tail<ArgsOf<E[K]>>): Extract<ReturnOf<E[K]> & Head<ArgsOf<E[K]>>, undefined> extends undefined ? (undefined extends A ? ReturnOf<E[K]> : A) : ReturnOf<E[K]>;
    emitAsync<K extends keyof E>(event: K, ...args: ArgsOf<E[K]>): any;
    subscribe<K extends ArrayOr<keyof E>>(events: K, handler: keyof H | IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): H;
    unsubscribe<K extends ArrayOr<keyof E>>(events: K, handler: keyof H | IterableOr<Handler<H, K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>, priority?: number): boolean;
    waitFor<K extends ArrayOr<keyof E>>(events: K, priority?: number): Promise<ArgsOf<K extends any[] ? E[K[number]] : E[Extract<K, keyof E>]>>;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): IUntilSubscriber<H, E>;
    until(promise: Promise<any>): IUntilSubscriber<H, E>;
    hasHandlersForEvent(...events: Array<keyof E>): boolean;
    private copyFrom;
    private handlersForEvent;
    private handlers;
}
declare module EventEmitter {
    class Host<E> implements IEventEmitterHost<E> {
        readonly event: IEventEmitter<this, E>;
    }
}
export default EventEmitter;
