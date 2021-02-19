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
import { WeightStatus } from "entity/player/IPlayer";
import StatusEffect, { StatusEffectBadness } from "entity/status/StatusEffect";
import Translation from "language/Translation";
import { IHighlight } from "newui/component/IComponent";
export default class Encumbered extends StatusEffect {
    private status?;
    register(): void;
    getLevel(): 0 | WeightStatus.Encumbered | WeightStatus.Overburdened;
    getHighlight(): IHighlight;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): Translation;
    getDescription(): Translation;
    refresh(): void;
    private onEntityMove;
    private onStatChange;
    private getStaminaReductionPerTurn;
    private writeEncumberedNote;
}
