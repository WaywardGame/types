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
import StatusEffect, { StatusEffectBadness } from "entity/status/StatusEffect";
export default class Dehydrated extends StatusEffect {
    register(): void;
    getIcon(): {
        frames: number;
    };
    getBadness(): StatusEffectBadness;
    getDescription(): import("../../../language/Translation").default;
    refresh(): void;
    private getThirst;
    private onStatChange;
}