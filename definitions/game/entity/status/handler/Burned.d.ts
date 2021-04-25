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
import StatusEffect, { StatusEffectBadness } from "game/entity/status/StatusEffect";
import StatusEffectRenderer from "renderer/StatusEffectRenderer";
export default class Burned extends StatusEffect {
    getRenderer(): StatusEffectRenderer;
    getBadness(): StatusEffectBadness;
    getDescription(): import("../../../../language/Translation").default;
    shouldPass(): boolean;
    onPassed(): void;
    onTick(): void;
    private getDamageRange;
    private getPassChance;
}
