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
import type Entity from "@wayward/game/game/entity/Entity";
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import MerchantNPC from "@wayward/game/game/entity/npc/npcs/Merchant";
export declare class ActionArgumentMerchant extends ActionArgumentCustom<MerchantNPC> {
    validate(executor: Entity | undefined, value: unknown): value is MerchantNPC;
    read(): MerchantNPC;
    write(executor: Entity | undefined, value: MerchantNPC): void;
}
export declare const BuyItemFromMerchant: Action<[ActionArgument.Item, ActionArgumentMerchant], import("@wayward/game/game/entity/action/IAction").ActionType, Entity<unknown, number, import("../../../../reference/IReferenceManager").EntityReferenceTypes, unknown>, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [import("../../../../item/Item").default, MerchantNPC]>;
