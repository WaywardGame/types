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
import { ISacrifice } from "@wayward/game/game/deity/IDeities";
import type Entity from "@wayward/game/game/entity/Entity";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import type Item from "@wayward/game/game/item/Item";
export declare class SacrificeArgument extends ActionArgumentCustom<ISacrifice> {
    validate(executor: Entity | undefined, value: unknown): value is ISacrifice;
    read(): ISacrifice;
    write(executor: Entity | undefined, value: ISacrifice): void;
}
export interface ISacrificeUsable extends IActionUsable, ISacrifice {
    items: Item[];
}
declare const _default: Action<[SacrificeArgument], import("../../player/Player").default, void, ISacrificeUsable, [ISacrifice]>;
export default _default;
