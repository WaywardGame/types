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
import { InfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { StatInfo } from "@wayward/game/game/inspection/infoProviders/stat/StatInfo";
export default class GenericInfo extends StatInfo {
    readonly score: InfoProvider.Observer<number>;
    readonly tier: InfoProvider.Observer<number>;
    readonly totalCivilizationScore: InfoProvider.Observer<number>;
    readonly civilizationScore: InfoProvider.Observer<number>;
    readonly turns: InfoProvider.Observer<number>;
    readonly ticks: InfoProvider.Observer<number>;
    readonly time: InfoProvider.Observer<import("../../../time/TimeManager").default>;
    getClass(): string[];
    get(): InfoProvider[];
}
