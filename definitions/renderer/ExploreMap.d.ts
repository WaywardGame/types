/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import ByteGrid from "renderer/fieldofview/ByteGrid";
import IExploreMap from "renderer/IExploreMap";
export default class ExploreMap extends ByteGrid implements IExploreMap {
    private readonly z;
    private encodedData;
    constructor(z: number, width: number, height: number);
    encode(): number[];
    decode(encodedData?: number[]): void;
    private unexploreEdges;
}
