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
import type { IUsableActionPossibleUsing } from "game/entity/action/usable/IUsableAction";
import type Item from "game/item/Item";
import type { Reference, ReferenceType } from "game/reference/IReferenceManager";
import type { Modifier } from "ui/input/IInput";
export interface IActionBarSlotData {
    useOnMove?: true;
    actionId?: string;
    using?: Omit<IUsableActionPossibleUsing, "item" | "doodad" | "creature" | "npc"> & {
        item?: Reference<ReferenceType.Item>;
        doodad?: Reference<ReferenceType.Doodad>;
        creature?: Reference<ReferenceType.Creature>;
        npc?: Reference<ReferenceType.NPC>;
    };
}
export declare module IActionBarSlotData {
    function using(slotData?: IActionBarSlotData): IUsableActionPossibleUsing;
    function item(slotData?: IActionBarSlotData | IActionBarSlotData["using"]): Item | undefined;
    function itemIs(slotData: IActionBarSlotData | IActionBarSlotData["using"] | undefined, item: Item): boolean;
    function copy(slotData?: IActionBarSlotData): IActionBarSlotData;
    function equals(a?: IActionBarSlotData, b?: IActionBarSlotData): boolean;
}
export declare function isActionBarUseOnMoveToggleBoundToClick(...modifiers: Modifier[]): boolean;
