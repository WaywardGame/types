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
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import type { IDisableable } from "@wayward/game/ui/component/IComponent";
import type { IRefreshableValue } from "@wayward/game/ui/component/Refreshable";
import type Stream from "@wayward/goodstream";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum ChoiceListClasses {
    Main = "menu-choice-list",
    Choice = "menu-choice",
    NoChoice = "menu-choice-list-no-choice"
}
export interface IChoiceListEvents<C extends Choice = Choice, OPTIONAL extends boolean = false> extends Events<BlockRow> {
    choose(choice: OPTIONAL extends true ? C | undefined : C, oldChoice?: C): any;
}
declare class ChoiceList<C extends Choice = Choice, OPTIONAL extends boolean = false> extends BlockRow implements IRefreshableValue<OPTIONAL extends true ? C | undefined : C>, IDisableable {
    event: IEventEmitter<this, IChoiceListEvents<C, OPTIONAL>>;
    private refreshMethod;
    private _selection;
    get choice(): typeof this._selection;
    private readonly _disabledReasons;
    get disabled(): boolean;
    private _canChooseNone;
    get canChooseNone(): boolean;
    constructor();
    setCanChooseNone(): ChoiceList.Optional<C>;
    setDisabled(val?: boolean, reason?: string): this;
    setChoices(...choices: ArrayOfIterablesOr<C>): this;
    get(id: C extends Choice<infer ID> ? ID : string | number): C | undefined;
    refresh(): this;
    setRefreshMethod(refreshMethod: (choiceList: this) => OPTIONAL extends true ? C | undefined : C): this;
    choose(chosen?: C, emitEvent?: boolean): this;
    choose(filter?: (choice: C, index: number) => any, emitEvent?: boolean): this;
    protected shouldDisableChosenChoice(): boolean;
    choices(filter?: (choice: C, index: number) => any): Stream<Exclude<C, never>>;
    private onChoiceChange;
}
declare namespace ChoiceList {
    type Optional<CHOICE extends Choice> = ChoiceList<CHOICE, true>;
}
export default ChoiceList;
export interface IChoiceEvents extends Events<CheckButton> {
    chosen(): any;
}
export declare class Choice<I extends string | number | undefined = string | number | undefined> extends CheckButton {
    readonly id: I;
    event: IEventEmitter<this, IChoiceEvents>;
    constructor(id: I);
    choose(): void;
}
