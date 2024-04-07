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
declare const _default: import("../Action").Action<[[arg1: import("../IAction").ActionArgument.Undefined, import("../IAction").ActionArgument.ItemInventory], [import("../IAction").ActionArgument.Undefined, import("../argument/ActionArgumentEnum").default<import("../../IEntity").AttackType, "MeleeWeapon" | "HandToHand" | "RangedWeapon" | "ThrowItem">], [arg1: import("../IAction").ActionArgument.Undefined, import("../IAction").ActionArgument.ItemInventory]], import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, import("@wayward/game/game/entity/action/actions/Attack").IAttackCanUse, [(import("../../../item/Item").default | undefined)?, (import("../../IEntity").AttackType | undefined)?, (import("../../../item/Item").default | undefined)?]>;
export default _default;
