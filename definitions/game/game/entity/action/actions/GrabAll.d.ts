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
declare const _default: import("../Action").Action<[[import("../IAction").ActionArgument.Undefined, import("../IAction").ActionArgument.ItemNearbyIncludingTradeContainer, import("../IAction").ActionArgument.ItemArrayNearbyIncludingTradeContainer, import("./moveItem/MoveItemsSourceArgument").default], [import("../IAction").ActionArgument.Undefined, import("../IAction").ActionArgument.Container], [import("../IAction").ActionArgument.Undefined, import("../IAction").ActionArgument.Integer32], [import("../IAction").ActionArgument.Undefined, import("./moveItem/MoveItemFilterArgument").MoveItemFilterArgument<import("./moveItem/MoveItemFilterArgument").IMoveItemFilterArgument>], [import("../IAction").ActionArgument.Undefined, import("./moveItem/MoveItemOptionsArgument").MoveItemOptionsArgument]], import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, import("@wayward/game/game/entity/action/actions/MoveItem").IMoveItemCanUse, [(import("../../../item/Item").default | import("../../../item/Item").default[] | import("./moveItem/MoveItemsSourceArgument").IMoveItemsSourceArgument | undefined)?, (import("../../../item/IItem").IContainer | undefined)?, (number | undefined)?, (import("./moveItem/MoveItemFilterArgument").IMoveItemFilterArgument | undefined)?, (import("./moveItem/MoveItemOptionsArgument").IMoveItemOptionsArgument | undefined)?]>;
export default _default;
