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
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import Message from "@wayward/game/language/dictionary/Message";
interface ICopyMapRequirement {
    type: ItemType;
    message: Message;
}
export declare const copyMapRequirements: ICopyMapRequirement[];
export declare function hasMapRequirement(requirement: ICopyMapRequirement, human: Human): Item | undefined;
export declare function canMakeMapCopy(human: Human): boolean;
declare const _default: Action<[ActionArgument.ItemNearby], ActionType.CopyMap, Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [Item]>;
export default _default;
