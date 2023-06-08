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
import type Human from "game/entity/Human";
import type { Stat } from "game/entity/IStats";
import { InfoProvider } from "game/inspection/InfoProvider";
export declare abstract class StatInfo extends InfoProvider {
    static getTitle(stat: Stat): import("game/inspection/InfoProvider").SimpleInfoProvider;
    private readonly _human;
    protected get human(): Human<number> | undefined;
    constructor(human: Human);
    getTitle(stat: Stat): import("game/inspection/InfoProvider").SimpleInfoProvider;
}
