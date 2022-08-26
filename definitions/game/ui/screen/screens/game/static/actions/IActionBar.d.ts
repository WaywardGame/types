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
import type { IUsableActionPossibleUsing } from "game/entity/action/usable/UsableAction";
import type { ReferenceType } from "game/reference/IReferenceManager";
import type { Reference } from "game/reference/ReferenceManager";
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
    function item(slotData?: IActionBarSlotData | IActionBarSlotData["using"]): import("../../../../../../game/item/Item").default | undefined;
    function copy(slotData?: IActionBarSlotData): IActionBarSlotData;
    function equals(a?: IActionBarSlotData, b?: IActionBarSlotData): boolean;
}
