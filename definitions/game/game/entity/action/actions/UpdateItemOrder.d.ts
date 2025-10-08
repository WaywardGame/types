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
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import type { IContainerSort } from "@wayward/game/game/item/IItemManager";
export declare class ActionArgumentItemSort extends ActionArgumentCustom<IContainerSort> {
    validate(executor: Entity | undefined, value: unknown): value is IContainerSort;
    read(): IContainerSort;
    write(executor: Entity | undefined, value: IContainerSort): void;
}
declare const _default: Action<[ActionArgument.Container, [ActionArgument.UnsignedInteger32NumberArray, ActionArgumentItemSort]], ActionType.UpdateItemOrder, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [import("@wayward/game/game/item/IItem").IContainer, number[] | IContainerSort]>;
export default _default;
