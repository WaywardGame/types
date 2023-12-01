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
import StatusEffect, { StatusEffectBadness } from "@wayward/game/game/entity/status/StatusEffect";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import StatusEffectRenderer from "@wayward/game/renderer/StatusEffectRenderer";
export default class Burned extends StatusEffect {
    getRenderer(): StatusEffectRenderer;
    getBadness(): StatusEffectBadness;
    getDescription(): TranslationImpl;
    shouldPass(): boolean;
    onPassed(): void;
    onTick(): void;
    private getDamageRange;
    private getPassChance;
}
