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
import Component from "@wayward/game/ui/component/Component";
import Bindable from "@wayward/game/ui/input/Bindable";
import { IInput, InputCatalyst, Modifier } from "@wayward/game/ui/input/IInput";
import InputInfo from "@wayward/game/ui/input/InputInfo";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import HashMap from "@wayward/utilities/collection/map/HashMap";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
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
    updateTargetNextTick(): void;
    /**
     * Forces a target update. Use as much as you want now ;)
     */
    updateTarget(force?: boolean): void;
    update(evt: Event & Partial<MouseEvent> & Partial<TouchEvent>): void;
    /**
     * Returns whether the mouse is currently within the given component, element, or selector, or its descendants.
     * @param what A component, element, or selector.
     * @param recalcTarget Whether to recalculate the target before this operation. Defaults to `false`
     */
    isWithin<W extends Component | Element | string | undefined>(what?: W, recalcTarget?: boolean): W extends undefined ? undefined : W extends Component ? W : W extends Element | string ? HTMLElement | undefined : never;
    /**
     * Returns whether the mouse is currently within the given component, element, or selector.
     * @param what A component, element, or selector.
     * @param recalcTarget Whether to recalculate the target before this operation. Defaults to `false`
     */
    isTarget<W extends Component | Element | string | undefined>(what?: W, recalcTarget?: boolean): W extends undefined ? undefined : W extends Component ? W : W extends Element | string ? HTMLElement | undefined : never;
    clearTarget(target?: Element): void;
    private _updateTarget;
}
interface IInputInfoEvents {
    unpress(input: IInput, info: InputInfo): any;
}
export declare class GlobalInputInfo extends EventEmitter.Host<IInputInfoEvents> {
    readonly catalysts: HashMap<InputCatalyst, InputInfo>;
    readonly inputs: HashMap<IInput, InputInfo>;
    readonly ignore: HashMap<IInput, InputInfo>;
    readonly modifiers: Set<"Shift" | "Alt" | "Ctrl">;
    isAny(): boolean;
    isNone(): boolean;
    isHolding(bindable: Bindable): InputInfo | undefined;
    isHolding(input: IInput): InputInfo | undefined;
    unpress(...unpresses: Array<InputCatalyst | IInput | Bindable>): void;
    mayBeModifier(): boolean;
}
export interface IInputManagerEvents {
    disabled(): any;
    enabled(): any;
    rising(catalyst: InputCatalyst, info: InputInfo, modifiers: Set<Modifier>): any;
    falling(catalyst: InputCatalyst, info: InputInfo, modifiers: Set<Modifier>): any;
    loop(): any;
}
declare class InputManager extends EventEmitter.Host<IInputManagerEvents> {
    readonly mouse: GlobalMouseInfo;
    readonly input: GlobalInputInfo;
    private readonly disablers;
    private component?;
    register(component: Component): this;
    deregister(): this;
    isRegistered(): boolean;
    private didReset;
    reset(): void;
    /**
     * @param disabler Each `disableUntil` call should be given a unique `disabler`,
     * as this system uses the timing from the latest `disableUntil` call
     */
    disableUntil(until: number | Promise<any>, disabler: string): void;
    /**
     * @param disabler Each `disable` call should be given a unique `disabler`
     */
    disable(disabler: string): boolean;
    enable(disabler: string): void;
    isDisabled(): boolean;
    isDisabledBy(disabler: string): boolean;
    private handleRising;
    private handleFalling;
    private updateModifiersChanged;
    private unpress;
    private handleOther;
    private lastLoop?;
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
