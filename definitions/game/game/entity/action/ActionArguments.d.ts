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
import { ActionArgument } from "game/entity/action/IAction";
import Entity from "game/entity/Entity";
export declare module ActionArguments {
    function getArgumentType(executor: Entity, expected: ActionArgument | ActionArgument[], actual: unknown): ActionArgument | undefined;
    function validateArgument(executor: Entity, expected: ActionArgument | ActionArgument[], actual: unknown): boolean;
}
