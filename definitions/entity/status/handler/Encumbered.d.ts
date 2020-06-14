/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { WeightStatus } from "entity/player/IPlayer";
import StatusEffect, { StatusEffectBadness } from "entity/status/StatusEffect";
import Translation from "language/Translation";
export default class Encumbered extends StatusEffect {
    private status?;
    register(): void;
    getLevel(): 0 | WeightStatus.Encumbered | WeightStatus.Overburdened;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): Translation;
    getDescription(): Translation;
    refresh(): void;
    private onEntityMove;
    private onStatChange;
    private getStaminaReductionPerTurn;
    private writeEncumberedNote;
}
