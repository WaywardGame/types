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
import type { Quality } from "game/IObject";
import type Human from "game/entity/Human";
import { Action } from "game/entity/action/Action";
import { ActionArgument } from "game/entity/action/IAction";
import type { IContainer } from "game/item/IItem";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
export declare enum DropAllowProtected {
    Disallow = 0,
    AllowSafe = 1,
    AllowDangerous = 2
}
export interface IDropCanUse {
    items: Item[];
    tile: Tile;
    into?: IContainer;
}
declare const _default: Action<[[ActionArgument.Undefined, ActionArgument.ItemNearby, ActionArgument.ItemArrayNearby, ActionArgument.ItemType], [ActionArgument.Undefined, ActionArgument.Quality], [ActionArgument.Undefined, ActionArgument.String], [ActionArgument.Undefined, ActionArgument.Integer32], [ActionArgument.Undefined, ActionArgument.Container]], Human<number>, void, {
    usable: true;
    items: Item[];
    into: IContainer | undefined;
    tile: Tile;
}, [(Item | import("game/item/IItem").ItemType | Item[] | undefined)?, (Quality | undefined)?, (string | undefined)?, (number | undefined)?, (IContainer | undefined)?]>;
export default _default;
