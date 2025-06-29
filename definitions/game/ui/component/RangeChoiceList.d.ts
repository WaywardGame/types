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
import Translation from "@wayward/game/language/Translation";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import Details from "@wayward/game/ui/component/Details";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum RangeChoiceListClasses {
    Main = "range-choice-list",
    Summary = "range-choice-list-summary",
    Button = "range-choice-list-button",
    ButtonSelection = "range-choice-list-button-selection",
    ButtonSelectionStart = "range-choice-list-button-selection-start",
    ButtonSelectionEnd = "range-choice-list-button-selection-end"
}
export interface RangeChoiceListDefinition<CHOICE_ID extends number | string> {
    name: Translation;
    getOptions(): CHOICE_ID[];
    translate(option: CHOICE_ID): Translation;
    initializeButton?(button: RangeChoiceListButton<CHOICE_ID>): any;
}
export interface RangeChoiceListEvents<CHOICE_ID extends number | string> extends Events<Details> {
    change(choices: CHOICE_ID[]): any;
}
export default class RangeChoiceList<CHOICE_ID extends number | string> extends Details {
    definition?: RangeChoiceListDefinition<CHOICE_ID> | undefined;
    event: IEventEmitter<this, RangeChoiceListEvents<CHOICE_ID>>;
    readonly optionButtons: Map<CHOICE_ID, RangeChoiceListButton<CHOICE_ID>>;
    options: CHOICE_ID[];
    private choiceStart?;
    private choiceEnd?;
    constructor(definition?: RangeChoiceListDefinition<CHOICE_ID> | undefined);
    setDefinition(definition?: RangeChoiceListDefinition<CHOICE_ID>): this;
    select(selection?: ArrayOr<CHOICE_ID>): this;
    refresh(): this;
    areAllSelected(): boolean;
    private onChoiceChange;
    private refreshChoiceStates;
}
export declare class RangeChoiceListButton<CHOICE_ID extends number | string> extends CheckButton {
    readonly id: CHOICE_ID;
    readonly definition: RangeChoiceListDefinition<CHOICE_ID>;
    constructor(id: CHOICE_ID, definition: RangeChoiceListDefinition<CHOICE_ID>);
}
