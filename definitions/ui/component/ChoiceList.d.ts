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
import { BlockRow } from "ui/component/BlockRow";
import { CheckButton } from "ui/component/CheckButton";
import { IDisableable } from "ui/component/IComponent";
import { IRefreshableValue } from "ui/component/Refreshable";
interface IChoiceListEvents<C extends Choice = Choice, OPTIONAL extends boolean = false> extends Events<BlockRow> {
    choose(choice: OPTIONAL extends true ? C | undefined : C): any;
}
export default class ChoiceList<C extends Choice = Choice, OPTIONAL extends boolean = false> extends BlockRow implements IRefreshableValue<OPTIONAL extends true ? C | undefined : C>, IDisableable {
    event: IEventEmitter<this, IChoiceListEvents<C, OPTIONAL>>;
    private refreshMethod;
    private _selection;
    get choice(): OPTIONAL extends true ? C | undefined : C;
    private readonly _disabledReasons;
    get disabled(): boolean;
    private _canChooseNone;
    get canChooseNone(): boolean;
    constructor();
    setCanChooseNone(): ChoiceList<C, true>;
    setDisabled(val?: boolean, reason?: string): this;
    setChoices(...choices: ArrayOfIterablesOr<C>): this;
    refresh(): this;
    setRefreshMethod(refreshMethod: (choiceList: this) => OPTIONAL extends true ? C | undefined : C): this;
    choose(chosen?: C): this;
    choose(filter?: (choice: C, index: number) => any): this;
    choices(filter?: (choice: C, index: number) => any): import("@wayward/goodstream/Stream").default<Exclude<C, never>>;
    private onChoiceChange;
}
export interface IChoiceEvents extends Events<CheckButton> {
    chosen(): any;
}
export declare class Choice<I extends string | number | undefined = string | number | undefined> extends CheckButton {
    readonly id: I;
    readonly event: IEventEmitter<this, IChoiceEvents>;
    constructor(id: I);
    choose(): void;
}
export {};
