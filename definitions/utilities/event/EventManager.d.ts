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
import type { EventBusManager } from "@wayward/utilities/event/EventBusManager";
import type EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { Events, IEventEmitterHost, IEventEmitterHostClass, IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
type HostOrHostClass = IEventEmitterHost<any> | IEventEmitterHostClass<any>;
type HostFromHostOrHostClass<H> = H extends {
    event: EventEmitter<null, any>;
} ? H : H extends IEventEmitterHostClass<any> ? InstanceOf<H> : H;
export type Emitter = HostOrHostClass;
export type EmitterOrBus<EventBus extends number> = EventBus | Emitter;
export type Event<EventBus extends number, EventBuses extends Record<EventBus, any>, E extends EmitterOrBus<EventBus>> = keyof Events<E extends EventBus ? EventBusHost<EventBus, EventBuses, E> : E>;
export type EventBusHost<EventBus extends number, EventBuses extends Record<EventBus, any>, E extends EventBus> = ReturnType<EventBuses[E]>;
type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
type HandlerInternal2<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
type HandlerInternal1<E, K extends keyof Events<E>> = HandlerInternal2<HostFromHostOrHostClass<E>, Events<E>[K]>;
export type Handler<EventBus extends number, EventBuses extends Record<EventBus, any>, E, K extends keyof Events<E extends EventBus ? EventBusHost<EventBus, EventBuses, E> : E>> = HandlerInternal1<E extends EventBus ? EventBusHost<EventBus, EventBuses, E> : E, K>;
interface IEventManagerUntil<EventBus extends number, EventBuses extends Record<EventBus, any>> {
    until(promise: Promise<any>): this;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): this;
    subscribe<E extends EmitterOrBus<EventBus>, K extends Event<EventBus, EventBuses, E>>(emitter: E, event: ArrayOr<K>, handler: Handler<EventBus, EventBuses, E, K>, priority?: number): this;
    subscribeNext<E extends EmitterOrBus<EventBus>, K extends Event<EventBus, EventBuses, E>>(emitter: E, event: ArrayOr<K>, handler: Handler<EventBus, EventBuses, E, K>, priority?: number): this;
}
export declare class EventManager<EventBus extends number, EventBuses extends Record<EventBus, any>> {
    private readonly eventBusRegistrar;
    private readonly busSubscriptions;
    private readonly subscriberMap;
    constructor(eventBusRegistrar: EventBusManager<EventBus, EventBuses>);
    /**
     * EventHandler decorator
     */
    eventHandler<E extends EmitterOrBus<EventBus>, K extends Event<EventBus, EventBuses, E>>(emitter: E, event: K, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Handler<EventBus, EventBuses, E, K>>) => void;
    eventHandler<E extends Emitter, K extends keyof Events<E>>(emitter: E, event: K, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Handler<EventBus, EventBuses, IEventEmitterHost<Events<E>>, K>>) => void;
    /**
     * EventSubscriber decorator
     * Marks that this class, whenever instantiated, should be an event subscriber.
     * **Note:** This decorator should only be used on classes with instances that will *always* need to be subscribed. IE don't use this on UI stuff. **Mods should never need this.**
     * **Note:** This is incompatible with `@Bind` decorators.
     */
    eventSubscriber<S extends Class<any>>(constructor: S): S;
    private initializeBusSubscriptions;
    subscribe<E extends EmitterOrBus<EventBus>, K extends Event<EventBus, EventBuses, E>>(emitter: E, events: ArrayOr<K>, handler: Handler<EventBus, EventBuses, E, K>, priority?: number, once?: boolean): void;
    subscribeNext<E extends EmitterOrBus<EventBus>, K extends Event<EventBus, EventBuses, E>>(emitter: E, events: ArrayOr<K>, handler: Handler<EventBus, EventBuses, E, K>, priority?: number): void;
    getBusName(eventBus: EventBus): string;
    unsubscribe<E extends EmitterOrBus<EventBus>, K extends Event<EventBus, EventBuses, E>>(emitter: E, events: ArrayOr<K>, handler: Handler<EventBus, EventBuses, E, K>, priority?: number): boolean | undefined;
    waitFor<E extends EmitterOrBus<EventBus>, K extends Event<EventBus, EventBuses, E>>(emitter: E, event: K, priority?: number): Promise<Parameters<Handler<EventBus, EventBuses, E, K>>>;
    until<E2>(emitter: IEventEmitterHost<E2>, ...events: Array<keyof E2>): IEventManagerUntil<EventBus, EventBuses>;
    until(promise: Promise<any>): IEventManagerUntil<EventBus, EventBuses>;
    registerEventBusSubscriber(subscriber: IEventEmitterHost<IEventSubscriberEvents>): void;
    /**
     * @deprecated This subscriber object will not be automatically cleaned up!
     *
     * If this is intentional, switch to {@link registerEventBusSubscriberUnsafe}.
     *
     *  Otherwise, this subscriber object needs to be an {@link IEventEmitterHost}<{@link IEventSubscriberEvents}> —
     * the `"releaseEventSubscriptions"` call will automatically clean up this subscriber.
     */
    registerEventBusSubscriber(subscriber: object): void;
    registerEventBusSubscriberUnsafe(subscriber: object): void;
    deregisterEventBusSubscriber(subscriber: object): boolean;
}
declare const SYMBOL_EVENT_HANDLERS: unique symbol;
export interface IEventSubscriberClass<EventBus extends number> extends NullaryClass<any> {
    [SYMBOL_EVENT_HANDLERS]: Array<[EventBus | IEventEmitterHostClass<any>, string | number | symbol, number, IEventSubscriberClass<EventBus>, string | number | symbol]>;
}
type ReturnTypeLenient<T extends AnyFunction> = ReturnType<T> extends void ? Promise<void> : ReturnType<T>;
export type TypedPropertyDescriptorFunctionAnyNOfParams<T extends AnyFunction> = TypedPropertyDescriptor<(...args: ArgumentsOf<T>) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8], a9: ArgumentsOf<T>[9]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<() => ReturnTypeLenient<T>> | TypedPropertyDescriptor<T> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8], a9: ArgumentsOf<T>[9]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0]) => ReturnType<T>> | TypedPropertyDescriptor<() => ReturnType<T>>;
export declare function OwnEventHandler<T extends IEventEmitterHostClass<any>, E extends keyof Events<T>>(cls: T, event: E, priority?: number): (host: InstanceOf<T>, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Events<T>[E]>) => void;
export {};
