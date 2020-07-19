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
import { ExhaustionLevel } from "entity/status/handler/IExhausted";
import StatusEffect, { StatusEffectBadness } from "entity/status/StatusEffect";
import Translation from "language/Translation";
export default class Exhausted extends StatusEffect {
    register(): void;
    getLevel(): ExhaustionLevel;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): Translation;
    getDescription(): Translation;
    refresh(): void;
    private onPreMove;
    private onStatChange;
    /**
     * Deals damage and sends a message, while keeping the player's stamina at least `1`.
     * @returns whether the effect was applied.
     */
    private applyEffect;
    private getDamageRange;
}
