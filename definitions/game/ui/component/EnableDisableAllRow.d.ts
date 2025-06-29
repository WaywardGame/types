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
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IEnableDisableAllRowEvents extends Events<BlockRow> {
    enableAll(): any;
    disableAll(): any;
    toggleAll(state: boolean): any;
}
export declare class EnableDisableAllRow extends BlockRow {
    event: IEventEmitter<this, IEnableDisableAllRowEvents>;
    constructor();
}
