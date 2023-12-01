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
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import type { IMoveItemFilterArgument } from "@wayward/game/game/entity/action/actions/moveItem/MoveItemFilterArgument";
import { MoveItemFilterArgument } from "@wayward/game/game/entity/action/actions/moveItem/MoveItemFilterArgument";
import MoveItemsSourceArgument from "@wayward/game/game/entity/action/actions/moveItem/MoveItemsSourceArgument";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import Translation from "@wayward/game/language/Translation";
export declare enum DropAllowProtected {
    Disallow = 0,
    AllowSafe = 1,
    AllowDangerous = 2
}
export interface IDropItemFilterArgument extends IMoveItemFilterArgument {
    allowProtected?: DropAllowProtected;
}
export declare class DropItemFilterArgument extends MoveItemFilterArgument<IDropItemFilterArgument> {
    validate(executor: Entity | undefined, value: unknown): value is IDropItemFilterArgument;
    read(): IDropItemFilterArgument;
    write(executor: Entity | undefined, value: IDropItemFilterArgument): void;
}
export declare enum TileDropType {
    Tile = 0,
    Doodad = 1,
    Vehicle = 2
}
interface IResolvedTileDrop {
    type: TileDropType;
    into: IContainer;
    blocker?: Translation;
}
export declare function resolveTileDrop(human: Human, tile?: Tile): IResolvedTileDrop;
export interface IDropCanUse {
    items: Item[];
    tile: Tile;
    into?: IContainer;
}
declare const _default: Action<[[ActionArgument.Undefined, ActionArgument.ItemNearby, ActionArgument.ItemArrayNearby, MoveItemsSourceArgument], [ActionArgument.Undefined, DropItemFilterArgument]], Human<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, {
    usable: true;
    items: Item[];
    into: IContainer;
    tile: Tile;
}, [(Item | Item[] | import("@wayward/game/game/entity/action/actions/moveItem/MoveItemsSourceArgument").IMoveItemsSourceArgument | undefined)?, (IDropItemFilterArgument | undefined)?]>;
export default _default;
