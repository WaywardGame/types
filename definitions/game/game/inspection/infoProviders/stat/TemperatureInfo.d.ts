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
export declare enum TemperatureInfoClasses {
}
export default class TemperatureInfo extends StatInfo {
    private readonly temperatureFactors;
    get(): InfoProvider[];
}
