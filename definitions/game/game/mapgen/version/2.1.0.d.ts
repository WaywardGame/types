/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type IMapGen from "@wayward/game/game/mapgen/IMapGen";
import type { IMapGenOptions } from "@wayward/game/game/mapgen/IMapGen";
export default class MapGen210 implements IMapGen {
    generateWorld({ island, generateNewWorld, load, loadArgs }: IMapGenOptions): Promise<void>;
    private setupTiles;
}
