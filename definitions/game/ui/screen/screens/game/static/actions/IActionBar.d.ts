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
import type { ReferenceType } from "game/reference/IReferenceManager";
import type { Reference } from "game/reference/ReferenceManager";
import type { IUiActionPossibleUsing } from "ui/screen/screens/game/static/actions/UiAction";
export interface IActionBarSlotData {
    actionId?: string;
    using?: Omit<IUiActionPossibleUsing, "item" | "doodad" | "creature"> & {
        item?: Reference<ReferenceType.Item>;
        doodad?: Reference<ReferenceType.Doodad>;
        creature?: Reference<ReferenceType.Creature>;
    };
}
export declare module IActionBarSlotData {
    function using(slotData?: IActionBarSlotData): IUiActionPossibleUsing;
    function item(slotData?: IActionBarSlotData): import("../../../../../../game/item/Item").default | undefined;
    function copy(slotData?: IActionBarSlotData): IActionBarSlotData;
}
