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
import { Events, IEventEmitter } from "event/EventEmitter";
import { BlockRow } from "ui/component/BlockRow";
export interface IEnableDisableAllRowEvents extends Events<BlockRow> {
    enableAll(): any;
    disableAll(): any;
    toggleAll(state: boolean): any;
}
export declare class EnableDisableAllRow extends BlockRow {
    readonly event: IEventEmitter<this, IEnableDisableAllRowEvents>;
    constructor();
}
