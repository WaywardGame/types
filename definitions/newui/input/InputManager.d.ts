/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import EventEmitter from "event/EventEmitter";
import Component from "newui/component/Component";
import Bindable from "newui/input/Bindable";
import { BindingCatalyst, BindingCatalystType, IBinding, Modifier } from "newui/input/IBinding";
import HashMap from "utilities/map/HashMap";
import Vector2 from "utilities/math/Vector2";
export declare class BindingInfo {
    readonly catalyst: BindingCatalyst;
    /**
     * The component that this input began in.
     */
    readonly startTarget: Component;
    /**
     * The unix timestamp representing when this input began. If this is a `"down"` event, the value will be `Date.now()`,
     * whereas if this is a `"holding"` or `"up"` event, the value will be when the `"down"` event fired.
     */
    readonly startTime: number;
    /**
     * The number of milliseconds that have elapsed since `startTime`. Calculated on the fly.
     */
    get duration(): number;
    constructor(evt: Event, catalyst: BindingCatalyst);
    startWasWithin(component?: Component): boolean | undefined;
}
export declare class MouseInfo {
    /**
     * The current position of the mouse.
     */
    position: Vector2;
    private _target?;
    private targetComponent?;
    /**
     * The component the mouse is currently hovering over.
     */
    get target(): Component | undefined;
    update(evt: Event & Partial<MouseEvent> & Partial<TouchEvent>): void;
    isWithin(selector: string, recalcTarget?: true): boolean;
    isWithin(element?: Element, recalcTarget?: true): boolean;
    isWithin(component?: Component, recalcTarget?: true): boolean;
    isTarget(component: Component): boolean;
    invalidateTarget(): void;
}
interface IInputInfoEvents {
    unpress(binding: IBinding, info: BindingInfo): any;
}
export declare class InputInfo extends EventEmitter.Host<IInputInfoEvents> {
    readonly catalysts: HashMap<import("./IBinding").IBindingCatalyst<BindingCatalystType.Key> | import("./IBinding").IBindingCatalyst<BindingCatalystType.MouseButton> | import("./IBinding").IBindingCatalyst<BindingCatalystType.Scroll>, BindingInfo>;
    readonly bindings: HashMap<IBinding, BindingInfo>;
    readonly modifiers: Set<"Shift" | "Alt" | "Ctrl">;
    isAny(): boolean;
    isNone(): boolean;
    isHolding(bindable: Bindable): BindingInfo | undefined;
    isHolding(binding: IBinding): BindingInfo | undefined;
    unpress(...unpresses: Array<BindingCatalyst | IBinding | Bindable>): void;
}
export interface IInputManagerEvents {
    disabled(): any;
    enabled(): any;
    rising(catalyst: BindingCatalyst, info: BindingInfo, modifiers: Set<Modifier>): any;
    falling(catalyst: BindingCatalyst, info: BindingInfo, modifiers: Set<Modifier>): any;
}
declare class InputManager extends EventEmitter.Host<IInputManagerEvents> {
    readonly mouse: MouseInfo;
    readonly input: InputInfo;
    private readonly disablers;
    private component?;
    register(component: Component): this;
    deregister(): this;
    isRegistered(): boolean;
    reset(): void;
    /**
     * Most input HTML events contain `ctrlKey`, `shiftKey` and `altKey` properties. This function takes any event, and if it has
     * those properties, it returns a `Set<Modifier>` matching which of those properties is true.
     */
    extractModifiers(evt: Event): Set<Modifier> | undefined;
    getCatalyst(evt: Event): BindingCatalyst | undefined;
    disableUntil(until: number | Promise<any>, disabler: string): void;
    isDisabled(): boolean;
    isDisabledBy(disabler: string): boolean;
    private handleRising;
    private handleFalling;
    private updateModifiersChanged;
    private unpress;
    private handleOther;
    private inputLoop;
    private onUnpress;
    /**
     * @returns Whether the modifiers have changed
     */
    private updateModifiers;
    private getBinding;
    private getModifiers;
    private cancelNonInputEvent;
    private cancelEvent;
}
declare const _default: InputManager;
export default _default;
