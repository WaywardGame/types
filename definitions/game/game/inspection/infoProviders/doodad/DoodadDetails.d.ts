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
import type Doodad from "game/doodad/Doodad";
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
