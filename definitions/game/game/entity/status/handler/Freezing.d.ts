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
import { StatusType } from "@wayward/game/game/entity/IEntity";
import { Stat } from "@wayward/game/game/entity/IStats";
import BadTemperatureEffect from "@wayward/game/game/entity/status/handler/BadTemperatureEffect";
import { BadTemperatureLevel } from "@wayward/game/game/entity/status/handler/IBadTemperature";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
export default class Freezing extends BadTemperatureEffect {
    getLevel(): BadTemperatureLevel.Hypothermia | BadTemperatureLevel.Freezing | BadTemperatureLevel.None;
    protected getConsequenceEffect(): StatusType;
    protected getConsequenceStat(): Stat;
    getTempType(): TempType;
}
