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
import type IMapGen from "@wayward/game/game/mapgen/IMapGen";
import type { IMapGenOptions } from "@wayward/game/game/mapgen/IMapGen";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IMapGen280Events {
    /**
     * To be set for when you want the player's spawn to be easy (locked to the top half of the map)
     * @returns True if the player spawn's should be easy
     */
    isEasySpawn(): boolean | undefined;
}
export default class MapGen280 extends EventEmitter.Host<IMapGen280Events> implements IMapGen {
    generateWorld({ island, generateNewWorld, load, loadArgs }: IMapGenOptions): Promise<void>;
    private setupTiles;
}
