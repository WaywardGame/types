/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { WeightStatus } from "game/entity/player/IPlayer";
import StatusEffect, { StatusEffectBadness } from "game/entity/status/StatusEffect";
import type { IHighlight } from "ui/util/IHighlight";
export default class Encumbered extends StatusEffect {
    private status?;
    register(): void;
    getLevel(): 0 | WeightStatus;
    getHighlight(): IHighlight;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): import("../../../../language/impl/TranslationImpl").default;
    getDescription(): import("../../../../language/impl/TranslationImpl").default;
    refresh(): void;
    private onEntityMove;
    private onStatChange;
    private getStaminaReductionPerTurn;
    private writeEncumberedNote;
}
