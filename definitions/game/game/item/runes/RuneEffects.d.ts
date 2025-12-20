/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ChaosEffect } from "@wayward/game/game/deity/Chaos";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type Human from "@wayward/game/game/entity/Human";
import type { QualityNatural } from "@wayward/game/game/IObject";
import { Quality } from "@wayward/game/game/IObject";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import { IRange } from "@wayward/utilities/math/Range";
export declare enum RuneEffectType {
    PacifyCreatures = 0,
    ZoneEffect = 1,
    SummonCreatures = 2,
    PacifyCreaturesResonant = 3,
    CurseEventSpeedUp = 4,
    SummonCreaturesResonant = 5
}
export interface RuneEffect {
    deity: DeityReal;
    /**
     * Defaults to 1 day. (Decimals work fine.)
     */
    cooldownDays?: SupplierOr<number, [Island]>;
    /**
     * A multiplier for reducing the cooldown of invocation.
     * If given an `IRange`, the `minimum` value is the multiplier at 0% skill, and the `maximum` value is the multiplier at 100% skill.
     * If given a `number`, the multiplier is `1.0` at 0% skill, and the `maximum` value is the multiplier at 100% skill.
     *
     * Defaults to 1.0 — no cooldown multiplier from theurgy skill.
     */
    cooldownTheurgyMultiplier?: SupplierOr<number | IRange, [Island]>;
    /**
     * @returns The amount of success this action had, a decimal from 0-1
     */
    use(human: Human, rune: Item): number | undefined;
}
export declare namespace RuneEffect {
    function get(effect?: RuneEffectType): RuneEffect | undefined;
}
export declare const RUNE_OF_GOOD_PACIFY_CHANCE: Record<QualityNatural, number>;
export declare const RUNE_OF_GOOD_PACIFY_TIME: Record<QualityNatural, IRange>;
export declare const RUNE_OF_CHAOS_EFFECT_MAP: PartialRecord<Quality, ChaosEffect>;
export declare const RUNE_OF_EVIL_SPAWN_COUNT: Record<QualityNatural, IRange>;
export declare const RUNE_OF_EVIL_MAX_ATTEMPTS = 20;
export declare const RUNE_OF_EVIL_RESONANT_RADIUS = 20;
/** Multiplied by min(1, rune quality) */
export declare const RUNE_OF_CHAOS_CURSE_EVENT_TIME_SKIP: IRange<number>;
export declare const RUNE_OF_CHAOS_CURSE_EVENT_TIME_SKIP_THEURGY_MULTIPLIER: IRange<number>;
export declare const RuneEffects: PartialRecord<RuneEffectType, RuneEffect>;
