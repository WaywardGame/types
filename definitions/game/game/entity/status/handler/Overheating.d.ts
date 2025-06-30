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
import { Stat } from "@wayward/game/game/entity/IStats";
import { StatusType } from "@wayward/game/game/entity/status/IStatus";
import { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import BadTemperatureEffect from "@wayward/game/game/entity/status/handler/BadTemperatureEffect";
import { BadTemperatureLevel } from "@wayward/game/game/entity/status/handler/IBadTemperature";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
export default class Overheating extends BadTemperatureEffect {
    getLevel(): BadTemperatureLevel.None | BadTemperatureLevel.Overheating | BadTemperatureLevel.Hyperthermia;
    protected getConsequenceEffect(): StatusType;
    protected getConsequenceStat(): Stat;
    getTempType(): TempType;
    getEffects(): StatusEffectList;
}
