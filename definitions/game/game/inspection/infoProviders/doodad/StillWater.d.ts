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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
export default class StillWaterInfoProvider extends InfoProvider {
    private readonly doodad;
    static get(doodad: Doodad): StillWaterInfoProvider | undefined;
    private readonly waterTopMessage;
    private readonly waterBottomMessage;
    private constructor();
    getClass(): string[];
    hasContent(): boolean;
    get(): InfoProvider[];
}
