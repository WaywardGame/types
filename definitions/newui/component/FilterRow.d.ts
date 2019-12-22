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
import { Events, IEventEmitter } from "event/EventEmitter";
import { LabelledRow } from "newui/component/LabelledRow";
export interface IFilterRowEvents extends Events<LabelledRow> {
    change(filter: string): any;
}
export default class FilterRow extends LabelledRow {
    readonly event: IEventEmitter<this, IFilterRowEvents>;
    private readonly input;
    get text(): string;
    set text(value: string);
    constructor();
}
