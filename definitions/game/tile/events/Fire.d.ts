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
import { ILootItem } from "game/ILoot";
import { Quality } from "game/IObject";
import { IContainer, ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import { ITileContainer } from "game/tile/ITerrain";
import { ITileEventDescription } from "game/tile/ITileEvent";
import TileEvent from "game/tile/TileEvent";
declare const fire: ITileEventDescription;
export default fire;
export declare function dissassemblyBurn(item: Item, container: ITileContainer, disassembly: boolean): void;
export declare function harvestGatherBurn(step: number, resources: ILootItem[] | undefined, container: IContainer, quality: Quality | undefined, tileEvent: TileEvent): void;
export declare function burnsLike(burnsLikeItem: ItemType, tileEvent: TileEvent, tileContainer: IContainer, quality: Quality): void;
