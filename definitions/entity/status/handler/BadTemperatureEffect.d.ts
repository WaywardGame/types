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
import { StatusType } from "entity/IEntity";
import { Stat } from "entity/IStats";
import { BadTemperatureLevel } from "entity/status/handler/IBadTemperature";
import StatusEffect, { StatusEffectBadness } from "entity/status/StatusEffect";
import { Temperature } from "game/temperature/ITemperature";
import Translation from "language/Translation";
export default abstract class BadTemperatureEffect extends StatusEffect {
    protected effectiveTemperature: Temperature;
    register(): void;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): Translation;
    getDescription(): Translation;
    abstract getLevel(): BadTemperatureLevel;
    refresh(): void;
    protected onTick(): void;
    protected abstract getConsequenceEffect(): StatusType;
    protected abstract getConsequenceStat(): Stat;
    private onTickEnd;
    private isLevelTwoBadTemp;
}
