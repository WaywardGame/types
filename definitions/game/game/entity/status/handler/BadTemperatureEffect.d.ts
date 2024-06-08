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
import type { StatusType } from "@wayward/game/game/entity/IEntity";
import type { Stat } from "@wayward/game/game/entity/IStats";
import { BadTemperatureLevel } from "@wayward/game/game/entity/status/handler/IBadTemperature";
import StatusEffect, { StatusEffectBadness } from "@wayward/game/game/entity/status/StatusEffect";
import type Island from "@wayward/game/game/island/Island";
import { Temperature, TempType } from "@wayward/game/game/temperature/ITemperature";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export default abstract class BadTemperatureEffect extends StatusEffect {
    protected effectiveTemperature: Temperature;
    register(): void;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): TranslationImpl;
    getDescription(): TranslationImpl;
    abstract getLevel(): BadTemperatureLevel;
    abstract getTempType(): TempType;
    refresh(): void;
    protected onTick(): void;
    protected abstract getConsequenceEffect(): StatusType;
    protected abstract getConsequenceStat(): Stat;
    protected onIslandTick(island: Island): void;
    private onPostMove;
    private isLevelTwoBadTemp;
}
