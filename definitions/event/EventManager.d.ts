/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { EventBus, EventBusHost } from "event/EventBuses";
import { Events, IEventEmitterHost, IEventEmitterHostClass } from "event/EventEmitter";
declare type HostOrHostClass = IEventEmitterHost<any> | IEventEmitterHostClass<any>;
declare type HostFromHostOrHostClass<H extends IEventEmitterHost<any> | IEventEmitterHostClass<any>> = H extends IEventEmitterHostClass<any> ? InstanceOf<H> : H;
export declare type EmitterOrBus = EventBus | HostOrHostClass;
export declare type Event<E extends EmitterOrBus> = keyof Events<E extends EventBus ? EventBusHost<E> : E>;
declare type ArgsOf<F> = ArgumentsOf<Extract<F, AnyFunction>>;
declare type ReturnOf<F> = ReturnType<Extract<F, AnyFunction>>;
declare type HandlerInternal2<H, F> = (host: H, ...args: ArgsOf<F>) => ReturnOf<F>;
declare type HandlerInternal1<E extends HostOrHostClass, K extends keyof Events<E>> = HandlerInternal2<HostFromHostOrHostClass<E>, Events<E>[K]>;
export declare type Handler<E extends EmitterOrBus, K extends Event<E>> = HandlerInternal1<E extends EventBus ? EventBusHost<E> : E, K>;
declare module EventManager {
    export function subscribe<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K, handler: IterableOr<Handler<E, K>>, priority?: number): void;
    export function unsubscribe<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K, handler: IterableOr<Handler<E, K>>, priority?: number): boolean | undefined;
    export function waitFor<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K, priority?: number): Promise<Parameters<Handler<E, K>>>;
    interface IEventManagerUntil {
        subscribe<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K, handler: IterableOr<Handler<E, K>>, priority?: number): this;
    }
    export function until(promise: Promise<any>): IEventManagerUntil;
    export function registerEventBusSubscriber(subscriber: object): void;
    export function deregisterEventBusSubscriber(subscriber: object): void;
    export {};
}
export default EventManager;
/**
 * Marks that this class, whenever instantiated, should be an event subscriber.
 * **Note:** This decorator should only be used on classes with instances that will *always* need to be subscribed. IE don't use this on UI stuff. **Mods should never need this.**
 * **Note:** This is incompatible with `@Bind` decorators.
 */
export declare function EventSubscriber<S extends Class<any>>(constructor: S): S;
declare type ReturnTypeLenient<T extends AnyFunction> = ReturnType<T> extends void ? Promise<void> : ReturnType<T>;
export declare type TypedPropertyDescriptorFunctionAnyNOfParams<T extends AnyFunction> = TypedPropertyDescriptor<(...args: ArgumentsOf<T>) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8], a9: ArgumentsOf<T>[9]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0]) => ReturnTypeLenient<T>> | TypedPropertyDescriptor<() => ReturnTypeLenient<T>> | TypedPropertyDescriptor<T> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8], a9: ArgumentsOf<T>[9]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7], a8: ArgumentsOf<T>[8]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6], a7: ArgumentsOf<T>[7]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5], a6: ArgumentsOf<T>[6]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4], a5: ArgumentsOf<T>[5]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3], a4: ArgumentsOf<T>[4]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2], a3: ArgumentsOf<T>[3]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1], a2: ArgumentsOf<T>[2]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0], a1: ArgumentsOf<T>[1]) => ReturnType<T>> | TypedPropertyDescriptor<(a0: ArgumentsOf<T>[0]) => ReturnType<T>> | TypedPropertyDescriptor<() => ReturnType<T>>;
export declare function OwnEventHandler<T extends IEventEmitterHostClass<any>, E extends keyof Events<T>>(cls: T, event: E, priority?: number): (host: InstanceOf<T>, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Events<T>[E]>) => void;
export declare function EventHandler<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<Handler<E, K>>) => void;
