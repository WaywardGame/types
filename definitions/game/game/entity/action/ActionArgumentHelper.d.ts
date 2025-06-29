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
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import type { ActionArgumentsEntry } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import Entity from "@wayward/game/game/entity/Entity";
export declare namespace ActionArgumentHelper {
    function getArgumentType(executor: Entity, expected: ActionArgumentsEntry, actual: unknown): ActionArgumentCustom<any> | ActionArgument | undefined;
    function validateArgument(executor: Entity, expected: ActionArgument | ActionArgument[], actual: unknown): boolean;
}
