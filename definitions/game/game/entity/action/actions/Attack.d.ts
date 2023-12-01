/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Human from "@wayward/game/game/entity/Human";
import { AttackType } from "@wayward/game/game/entity/IEntity";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type { IItemDescription, IRanged, ItemType } from "@wayward/game/game/item/IItem";
import { ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
export interface IBaseCanUse extends IActionUsable {
    human: Human;
    attackType: AttackType;
    pvp: boolean;
    facingTile: Tile;
    attackSkill: SkillType;
    weapon?: Item;
    weaponDescription?: IItemDescription;
}
export interface IAttackCloseUpCanUse extends IBaseCanUse {
    attackType: AttackType.HandToHand | AttackType.MeleeWeapon;
}
export interface IAttackThrowItemCanUse extends IBaseCanUse {
    attackType: AttackType.ThrowItem;
    weapon: Item;
    weaponDescription: IItemDescription;
}
export interface IAttackRangedWeaponCanUse extends IBaseCanUse {
    attackType: AttackType.RangedWeapon;
    weapon: Item;
    ranged: IRanged;
    rangedRequiredWeapon: Item | undefined;
    ammoItem: Item | undefined;
    ammunitionType: ItemType | ItemTypeGroup | undefined;
}
export type IAttackCanUse = IAttackCloseUpCanUse | IAttackThrowItemCanUse | IAttackRangedWeaponCanUse;
declare const _default: Action<[[ActionArgument.Undefined, ActionArgument.ItemInventory], [ActionArgument.Undefined, import("../argument/ActionArgumentEnum").default<AttackType, "MeleeWeapon" | "HandToHand" | "RangedWeapon" | "ThrowItem">], [ActionArgument.Undefined, ActionArgument.ItemInventory]], Human<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, IAttackCanUse, [(Item | undefined)?, (AttackType | undefined)?, (Item | undefined)?]>;
export default _default;
