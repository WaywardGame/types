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
import type { Stat } from "@wayward/game/game/entity/IStats";
import type { SimpleInfoProvider } from "@wayward/game/game/inspection/InfoProvider";
import { StatInfo } from "@wayward/game/game/inspection/infoProviders/stat/StatInfo";
import type { IStatDisplayDescription } from "@wayward/game/ui/screen/screens/game/static/stats/IStatDisplayDescription";
export default class FerocityInfo extends StatInfo {
    getTitle(stat: Stat): SimpleInfoProvider;
    getClass(): string[];
    get(): SimpleInfoProvider[];
    getBorderColorPreference(stat: Stat): IStatDisplayDescription["color"];
}
