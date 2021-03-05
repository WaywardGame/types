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
import { StatusType } from "game/entity/IEntity";
import { Stat } from "game/entity/IStats";
import BadTemperatureEffect from "game/entity/status/handler/BadTemperatureEffect";
import { BadTemperatureLevel } from "game/entity/status/handler/IBadTemperature";
export default class Overheating extends BadTemperatureEffect {
    getLevel(): BadTemperatureLevel.None | BadTemperatureLevel.Overheating | BadTemperatureLevel.Hyperthermia;
    protected getConsequenceEffect(): StatusType;
    protected getConsequenceStat(): Stat;
}
