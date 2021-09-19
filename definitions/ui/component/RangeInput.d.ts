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
import { Events, IEventEmitter } from "event/EventEmitter";
import Component from "ui/component/Component";
import { IRefreshableValue } from "ui/component/Refreshable";
import { IBindHandlerApi } from "ui/input/Bind";
interface IRangeInputEvents extends Events<Component> {
    change(val: number): any;
    finish(val: number): any;
}
export declare class RangeInput extends Component<HTMLInputElement> implements IRefreshableValue<number> {
    event: IEventEmitter<this, IRangeInputEvents>;
    private refreshMethod;
    private clampOnRefresh;
    private _value;
    get value(): number;
    set value(val: number);
    get min(): number;
    get max(): number;
    get step(): number;
    private target?;
    constructor();
    setTarget(target?: Component): this;
    clamp(): this;
    setStep(step: number): this;
    setMax(max: number, clamp?: boolean): this;
    setMin(min: number, clamp?: boolean): this;
    update(eventTrigger?: keyof IRangeInputEvents): void;
    refresh(): this;
    setRefreshMethod(refresh: () => number): this;
    noClampOnRefresh(): this;
    setDisabled(disabled?: boolean): this;
    get disabled(): boolean;
    protected onAppend(): void;
    protected onNextOption(api: IBindHandlerApi): boolean;
    protected onPreviousOption(api: IBindHandlerApi): boolean;
    protected playSound(): void;
}
export {};
