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
import ByteGrid from "@wayward/game/renderer/exploreMap/ByteGrid";
export declare const EXPLORED_MAP_IS_EXPLORED = 255;
export default class ExploreMap extends ByteGrid {
    private readonly z;
    private encodedData;
    constructor(z: number, width: number, height: number);
    isExplored(x: number, y: number, extraRange?: number): boolean;
    markAsExplored(x: number, y: number): void;
    encode(): number[];
    decode(encodedData?: number[]): void;
    private unexploreEdges;
    private _isExplored;
}
