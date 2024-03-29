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
import type { StatusType } from "game/entity/IEntity";
import type { Stat } from "game/entity/IStats";
import { BadTemperatureLevel } from "game/entity/status/handler/IBadTemperature";
import StatusEffect, { StatusEffectBadness } from "game/entity/status/StatusEffect";
import { Temperature } from "game/temperature/ITemperature";
export default abstract class BadTemperatureEffect extends StatusEffect {
    protected effectiveTemperature: Temperature;
    register(): void;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): import("../../../../language/impl/TranslationImpl").default;
    getDescription(): import("../../../../language/impl/TranslationImpl").default;
    abstract getLevel(): BadTemperatureLevel;
    refresh(): void;
    protected onTick(): void;
    protected abstract getConsequenceEffect(): StatusType;
    protected abstract getConsequenceStat(): Stat;
    private onGameTick;
    private onPlayerTurnStart;
    private isLevelTwoBadTemp;
}
