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
import { Stat } from "@wayward/game/game/entity/IStats";
import { StatInfo } from "@wayward/game/game/inspection/infoProviders/stat/StatInfo";
export default class StaminaInfo extends StatInfo {
    getCoreStat(): Stat;
}