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
import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import type Human from "game/entity/Human";
import { ItemType } from "game/item/IItem";
import Message from "language/dictionary/Message";
interface ICopyMapRequirement {
    type: ItemType;
    message: Message;
}
export declare const copyMapRequirements: ICopyMapRequirement[];
export declare function hasMapRequirement(requirement: ICopyMapRequirement, human: Human): import("../../../item/Item").default | undefined;
export declare function canMakeMapCopy(human: Human): boolean;
declare const _default: Action<[ActionArgument.ItemNearby], import("../../player/Player").default, void, [import("../../../item/Item").default]>;
export default _default;
