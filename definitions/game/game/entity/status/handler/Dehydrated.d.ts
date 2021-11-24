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
import StatusEffect, { StatusEffectBadness } from "game/entity/status/StatusEffect";
import type { IHighlight } from "ui/component/IComponent";
export default class Dehydrated extends StatusEffect {
    register(): void;
    getHighlight(): IHighlight;
    getBadness(): StatusEffectBadness;
    getDescription(): import("../../../../language/impl/TranslationImpl").default;
    refresh(): void;
    private getThirst;
    private onStatChange;
}
