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
import { ExhaustionLevel } from "game/entity/status/handler/IExhausted";
import StatusEffect, { StatusEffectBadness } from "game/entity/status/StatusEffect";
import Translation from "language/Translation";
import { IHighlight } from "ui/component/IComponent";
export default class Exhausted extends StatusEffect {
    register(): void;
    getLevel(): ExhaustionLevel;
    getHighlight(): IHighlight;
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
