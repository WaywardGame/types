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
import type { IStatusEffectIconDescription } from "@wayward/game/game/entity/status/StatusEffect";
import StatusEffect, { StatusEffectBadness, StatusEffectParticleEvent } from "@wayward/game/game/entity/status/StatusEffect";
import type { StatusEffectTranslation } from "@wayward/game/language/dictionary/Misc";
import Translation from "@wayward/game/language/Translation";
import StatusEffectRenderer from "@wayward/game/renderer/StatusEffectRenderer";
import type { IRGB } from "@wayward/utilities/Color";
export default class Bleeding extends StatusEffect {
    getParticles(event: StatusEffectParticleEvent): [number, IRGB] | undefined;
    getRenderer(): StatusEffectRenderer | undefined;
    getDefaultRenderer(): StatusEffectRenderer | undefined;
    getBadness(): StatusEffectBadness.Neutral | StatusEffectBadness.Bad;
    getTranslation(which?: StatusEffectTranslation.Adjective | StatusEffectTranslation.Name): Translation;
    getDescription(): Translation;
    getIcon(): IStatusEffectIconDescription | undefined;
    shouldPass(): boolean;
    onPassed(level: number): void;
    onTick(): void;
    private getDamageRange;
    private getPassChance;
}
