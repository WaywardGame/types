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
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
export interface IMoveItemOptionsArgument {
    isTrading?: boolean;
    skipSound?: boolean;
    skipMessage?: boolean;
}
export declare class MoveItemOptionsArgument extends ActionArgumentCustom<IMoveItemOptionsArgument> {
    validate(executor: Entity | undefined, value: unknown): value is IMoveItemOptionsArgument;
    read(): IMoveItemOptionsArgument;
    write(executor: Entity | undefined, value: IMoveItemOptionsArgument): void;
}
