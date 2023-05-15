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
import type { ILootItem } from "game/ILoot";
import type { Quality } from "game/IObject";
import type Island from "game/island/Island";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
export declare enum FireStage {
    Extinguished = 0,
    Embers = 1,
    AlmostExtinguished = 150,
    Struggling = 300,
    Thriving = 450,
    Healthy = 600,
    Raging = 750
}
export declare module FireStage {
    function get(decay: number): FireStage;
    function getIndex(fireStage: FireStage): number;
    function getTemperature(stage: FireStage): number;
    function getTemperature(stage: FireStage, max?: number): number;
    function getTemperature(stage: FireStage, min: number, max: number): number;
}
export declare module IFire {
    function dissassemblyBurn(island: Island, item: Item, tile: Tile, disassembly: boolean): Item[];
    function harvestGatherBurn(step: number, resources: ILootItem[] | undefined, tile: Tile, quality: Quality | undefined, tileEvent: TileEvent): void;
    function burnsLike(burnsLikeItem: ItemType, tileEvent: TileEvent, tile: Tile, quality: Quality | undefined): Item[];
}
