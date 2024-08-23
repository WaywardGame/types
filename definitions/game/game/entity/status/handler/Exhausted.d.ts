/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ExhaustionLevel } from "@wayward/game/game/entity/status/handler/IExhausted";
import Status from "@wayward/game/game/entity/status/Status";
import { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
export declare const STAMINA_LOW_PENALTY_START_VALUE = 15;
export declare const STAMINA_CHANGE_WARNING_PERCENT = 0.05;
export default class Exhausted extends Status {
    register(): void;
    getLevel(): ExhaustionLevel;
    getHighlight(): IHighlight;
    getEffects(): StatusEffectList;
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
