/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import EventEmitter from "event/EventEmitter";
import IMapGen from "mapgen/IMapGen";
export interface IMapGen280Events {
    /**
     * To be set for when you want the player's spawn to be easy (locked to the top half of the map)
     * @returns True if the player spawn's should be easy
     */
    isEasySpawn(): boolean | undefined;
}
export default class MapGen280 extends EventEmitter.Host<IMapGen280Events> implements IMapGen {
    generateWorld(generateNewWorld: boolean): void;
    private setupTiles;
}
