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
import { ExhaustionLevel } from "@wayward/game/game/entity/status/handler/IExhausted";
import StatusEffect, { StatusEffectBadness } from "@wayward/game/game/entity/status/StatusEffect";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
export default class Exhausted extends StatusEffect {
    register(): void;
    getLevel(): ExhaustionLevel;
    getHighlight(): IHighlight;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(): TranslationImpl;
    getDescription(): TranslationImpl;
    refresh(): void;
    private onPreMove;
    private onStatChange;
    /**
     * Deals damage and sends a message, while keeping the player's stamina at least `0`.
     * @returns whether the effect was applied.
     */
    private applyEffect;
    private getDamageRange;
}
