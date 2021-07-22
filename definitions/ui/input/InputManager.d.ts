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
import EventEmitter from "event/EventEmitter";
import Component from "ui/component/Component";
import Bindable from "ui/input/Bindable";
import { IInput, InputCatalyst, Modifier } from "ui/input/IInput";
import HashMap from "utilities/collection/map/HashMap";
import Vector2 from "utilities/math/Vector2";
export declare class InputInfo {
    readonly catalyst: InputCatalyst;
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
     * Whether this input was a touch input
     */
    readonly touch: boolean;
    /**
     * The number of milliseconds that have elapsed since `startTime`. Calculated on the fly.
     */
    get duration(): number;
    constructor(evt: Event, catalyst: InputCatalyst);
    startWasWithin(component?: Component): boolean | undefined;
}
export interface IGlobalMouseInfoEvents {
    move(position: Vector2): any;
    invalidateTarget(): any;
    updateTarget(element: HTMLElement | undefined): any;
}
export declare class GlobalMouseInfo extends EventEmitter.Host<IGlobalMouseInfoEvents> {
    /**
     * The current position of the mouse.
     */
    position: Vector2;
    private _targetElement?;
    private targetComponent?;
    /**
     * The component the mouse is currently hovering over. `null` if the hovered element has no associated component.
     */
    get target(): Component | null;
    /**
     * The element the mouse is currently hovering over.
     */
    get targetElement(): HTMLElement | undefined;
    /**
     * Forces a target update. Don't call this unless you absolutely have to, it's a perf hog.
     */
    updateTarget(): void;
    update(evt: Event & Partial<MouseEvent> & Partial<TouchEvent>): void;
    /**
     * Returns whether the mouse is currently within the given component, element, or selector, or its descendants.
     * @param what A component, element, or selector.
     * @param recalcTarget Whether to recalculate the target before this operation. Defaults to `false`
     */
    isWithin<W extends Component | Element | string | undefined>(what?: W, recalcTarget?: boolean): (W extends Component ? W : HTMLElement) | false;
    /**
     * Returns whether the mouse is currently within the given component, element, or selector.
     * @param what A component, element, or selector.
     * @param recalcTarget Whether to recalculate the target before this operation. Defaults to `false`
     */
    isTarget<W extends Component | Element | string | undefined>(what?: W, recalcTarget?: boolean): (W extends Component ? W : HTMLElement) | false;
    invalidateTarget(): void;
    private _updateTarget;
}
interface IInputInfoEvents {
    unpress(input: IInput, info: InputInfo): any;
}
export declare class GlobalInputInfo extends EventEmitter.Host<IInputInfoEvents> {
    readonly catalysts: HashMap<InputCatalyst, InputInfo>;
    readonly inputs: HashMap<IInput, InputInfo>;
    readonly modifiers: Set<"Shift" | "Alt" | "Ctrl">;
    isAny(): boolean;
    isNone(): boolean;
    isHolding(bindable: Bindable): InputInfo | undefined;
    isHolding(input: IInput): InputInfo | undefined;
    unpress(...unpresses: Array<InputCatalyst | IInput | Bindable>): void;
}
export interface IInputManagerEvents {
    disabled(): any;
    enabled(): any;
    rising(catalyst: InputCatalyst, info: InputInfo, modifiers: Set<Modifier>): any;
    falling(catalyst: InputCatalyst, info: InputInfo, modifiers: Set<Modifier>): any;
}
declare class InputManager extends EventEmitter.Host<IInputManagerEvents> {
    readonly mouse: GlobalMouseInfo;
    readonly input: GlobalInputInfo;
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
    getCatalyst(evt: Event): InputCatalyst | undefined;
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
    private getInput;
    private getModifiers;
    private cancelNonInputEvent;
    private cancelEvent;
}
declare const _default: InputManager;
export default _default;
