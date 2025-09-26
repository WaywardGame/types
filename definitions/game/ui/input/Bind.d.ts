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
import Bindable from "@wayward/game/ui/input/Bindable";
import { IInput } from "@wayward/game/ui/input/IInput";
import InputInfo from "@wayward/game/ui/input/InputInfo";
import type { GlobalInputInfo, GlobalMouseInfo } from "@wayward/game/ui/input/InputManager";
import type { Macro } from "@wayward/game/ui/input/Macros";
import type { TypedPropertyDescriptorFunctionAnyNOfParams } from "@wayward/utilities/event/EventManager";
export interface IBindHandlerApi {
    /**
     * You should never need this unless you expect the user to be trying to use a scroll binding for your bind handler.
     */
    preventDefault?: true;
    /**
     * The bindable this handler is called for.
     */
    bindable: Bindable | "anything" | "nothing";
    /**
     * The type of input event.
     * - `"down"` — When the bindable is pressed.
     * - `"up"` — When the bindable is released.
     * - `"holding"` — Every frame while the bindable is held.
     */
    event: BindingEventName;
    /**
     * Details on the catalyst of this event.
     */
    catalyst: InputInfo;
    /**
     * Details on where the mouse is.
     */
    mouse: GlobalMouseInfo;
    /**
     * Details on the status of all input.
     */
    input: GlobalInputInfo;
    /**
     * A set containing all `Bindable`s that:
     * 1. Matched the currently pressed keys.
     * 2. Were handled with a `@Binding` event handler that returned `true`.
     * Note: Only contains `Bindable`s of which the handlers have already been processed.
     */
    caught: Set<Bindable>;
    /**
     * Whether this event is cancelled. If `true`, no other bind handlers will be processed.
     */
    cancelled: boolean;
    /** The current input sequence */
    macro?: Macro;
}
export type BindingHandler<R = boolean> = (api: IBindHandlerApi) => R;
interface IBindHandlerRegistration<T extends Record<P, BindingHandler>, P extends string | number | symbol> {
    bindable: Bindable | "anything" | "nothing";
    modifiersOnly: boolean;
    event: BindingEvent;
    priority: number;
    always: boolean;
    handlerProperty: P;
    instances: Set<T>;
}
declare enum BindingEvent {
    down = 0,
    up = 1,
    holding = 2
}
type BindingEventName = keyof typeof BindingEvent;
export type { BindingEventName as BindingEvent };
declare namespace Bind {
    /**
     * Registers a handler for when the given `Bindable` is pressed. This event won't be fired again until the `Bindable` was then *released*.
     *
     * Your decorated method should return whether or not the bindable was *actually* activated. (For example, if the mouse was in the right
     * spot and the action can currently be executed.) If you return `true`, *no other* `@Bind.onDown` handlers will be run. If you return
     * `false`, other matching `@Bind.onDown` handlers *will* be run.
     *
     * @param bindable The `Bindable`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onDown(bindable: Bindable, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler>) => void;
    /**
     * Registers a handler for when anything is pressed.
     * @param bindable Must be the string `"anything"`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onDown(bindable: "anything", priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for when nothing is pressed.
     * @param bindable Must be the string `"nothing"`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onDown(bindable: "nothing", priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for when the given `Bindable`, or "anything" is pressed. This handler will *always* be executed, even if other handlers also matched the catalyst.
     * @param bindable The `Bindable`, or the string `"anything"` (to handle when *anything* is pressed).
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     * @param always Must be `true`.
     */
    function onDown(bindable: Bindable | "anything" | "nothing", priority: number | undefined, always: true): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for when the given `Bindable` is released.
     * @param bindable The `Bindable`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onUp(bindable: Bindable | "anything", priority?: number, always?: boolean): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for every frame in which the given `Bindable` is held down.
     *
     * Your decorated method should return whether or not the bindable is *actually* held. (For example, if the mouse was in the right
     * spot and the action can currently be executed.) If you return `true`, *no other* `@Bind.onHolding` handlers will be run. If you
     * return `false`, other matching `@Bind.onHolding` handlers *will* be run.
     *
     * @param bindable The `Bindable`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onHolding(bindable: Bindable, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler>) => void;
    /**
     * Registers a handler for every frame in which anything is held down.
     * @param bindable Must be the string `"anything"`.
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     */
    function onHolding(bindable: "anything", priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    /**
     * Registers a handler for every frame in which the given `Bindable` or "anything" is held down. This handler will *always* be executed, even if other handlers also matched the catalyst.
     * @param bindable The `Bindable`, or the string `"anything"` (to handle when *anything* is held).
     * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
     * @param always Must be `true`.
     */
    function onHolding(bindable: Bindable | "anything", priority: number | undefined, always: true): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    function addHandler(bindable: Bindable, event: BindingEventName, handler: BindingHandler, priority?: number): void;
    function addHandler(bindable: "anything" | "nothing", event: BindingEventName, handler: BindingHandler<void>, priority?: number): void;
    function addHandler(bindable: Bindable | "anything" | "nothing", event: BindingEventName, handler: BindingHandler<void>, priority: number | undefined, always: true): void;
    function addHandler<T extends Record<K, BindingHandler>, K extends keyof T>(bindable: Bindable, event: BindingEventName, obj: T, key: K, priority?: number): void;
    function addHandler<T extends Record<K, BindingHandler<void>>, K extends keyof T>(bindable: "anything" | "nothing", event: BindingEventName, obj: T, key: K, priority?: number): void;
    function addHandler<T extends Record<K, BindingHandler<void>>, K extends keyof T>(bindable: Bindable | "anything" | "nothing", event: BindingEventName, obj: T, key: K, priority: number | undefined, always: true): void;
    function removeHandler(bindable: Bindable, event: BindingEventName, handler: BindingHandler, priority?: number): void;
    function removeHandler(bindable: "anything" | "nothing", event: BindingEventName, handler: BindingHandler<void>, priority?: number): void;
    function removeHandler(bindable: Bindable | "anything" | "nothing", event: BindingEventName, handler: BindingHandler<void>, priority: number | undefined, always: true): void;
    function removeHandler<T extends Record<K, BindingHandler>, K extends keyof T>(bindable: Bindable, event: BindingEventName, obj: T, key: K, priority?: number): void;
    function removeHandler<T extends Record<K, BindingHandler<void>>, K extends keyof T>(bindable: "anything" | "nothing", event: BindingEventName, obj: T, key: K, priority?: number): void;
    function removeHandler<T extends Record<K, BindingHandler<void>>, K extends keyof T>(bindable: Bindable | "anything" | "nothing", event: BindingEventName, obj: T, key: K, priority: number | undefined, always: true): void;
    type HandlerRegistrationGeneric = IBindHandlerRegistration<Record<string | number, BindingHandler>, string | number>;
    /**
     * Registers bind handlers for the given class instance. (Bind handlers are methods decorated with `@Bind.onDown`, `@Bind.onHolding`, `@Bind.onUp`)
     */
    function registerHandlers(host: any, warnIfNoneRegistered?: boolean): boolean;
    /**
     * Deregisters any registered bind handlers for the given class instance. (Bind handlers are methods decorated with `@Bind.onDown`, `@Bind.onHolding`, `@Bind.onUp`)
     */
    function deregisterHandlers(host: any): void;
    const shouldLogHoldingEvent = false;
    function emitEvent(event: BindingEventName, input: IInput, info: InputInfo, mouse: GlobalMouseInfo, globalInput: GlobalInputInfo): Set<Bindable>;
    function handleMaybeNothingPressed(input: GlobalInputInfo, mouse: GlobalMouseInfo): void;
    namespace Modifiers {
        /**
         * Registers a handler for when the modifiers of the given `Bindable` are pressed. This event won't be fired again until the modifiers of the `Bindable` are then *released*.
         *
         * Your decorated method should return whether or not the bindable was *actually* activated. (For example, if the mouse was in the right
         * spot and the action can currently be executed.) If you return `true`, *no other* `@Bind.onDown` handlers will be run. If you return
         * `false`, other matching `@Bind.onDown` handlers *will* be run.
         *
         * @param bindable The `Bindable`.
         * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
         */
        function onDown(bindable: Bindable, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler>) => void;
        /**
         * Registers a handler for when the modifiers of the given `Bindable` are pressed. This handler will *always* be executed, even if other handlers also matched the catalyst.
         * @param bindable The `Bindable`.
         * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
         * @param always Must be `true`.
         */
        function onDown(bindable: Bindable, priority: number | undefined, always: true): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
        /**
         * Registers a handler for when the modifiers of the given `Bindable` are released.
         * @param bindable The `Bindable`.
         * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
         */
        function onUp(bindable: Bindable, priority?: number, always?: boolean): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
        /**
         * Registers a handler for every frame in which the modifiers of the given `Bindable` are held down.
         *
         * Your decorated method should return whether or not the bindable is *actually* held. (For example, if the mouse was in the right
         * spot and the action can currently be executed.) If you return `true`, *no other* `@Bind.onHolding` handlers will be run. If you
         * return `false`, other matching `@Bind.onHolding` handlers *will* be run.
         *
         * @param bindable The `Bindable`.
         * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
         */
        function onHolding(bindable: Bindable, priority?: number): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler>) => void;
        /**
         * Registers a handler for every frame in which the modifiers of the given `Bindable` are held down. This handler will *always* be executed, even if other handlers also matched the catalyst.
         * @param bindable The `Bindable`, or the string `"anything"` (to handle when *anything* is held).
         * @param priority The "priority" of this handler compared to other handlers. Higher priorities are executed first.
         * @param always Must be `true`.
         */
        function onHolding(bindable: Bindable, priority: number | undefined, always: true): (host: any, property2: string | number | symbol, descriptor: TypedPropertyDescriptorFunctionAnyNOfParams<BindingHandler<any>>) => void;
    }
}
export default Bind;
