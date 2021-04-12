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
import Doodad from "game/doodad/Doodad";
import { InfoProvider } from "game/inspection/InfoProvider";
export default class DoodadDetails extends InfoProvider {
    private readonly doodad;
    constructor(doodad: Doodad);
    getClass(): string[];
    hasContent(): boolean;
    get(): import("game/inspection/InfoProvider").SimpleInfoProvider[];
    private getInsulation;
    private getPreservationChance;
}
