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
import type Entity from "@wayward/game/game/entity/Entity";
import type { QualityReal } from "@wayward/game/game/IObject";
import type Island from "@wayward/game/game/island/Island";
import type TimeManager from "@wayward/game/game/time/TimeManager";
import type WorldZ from "@wayward/utilities/game/WorldZ";
import { IRange } from "@wayward/utilities/math/Range";
export declare enum Temperature {
    Coldest = -100,
    Cold = -50,
    Freezing = -37.5,
    Cool = -25,
    Chilled = -12.5,
    Neutral = 0,
    LukeWarm = 12.5,
    Warm = 25,
    Overheating = 37.5,
    Hot = 50,
    Hottest = 100
}
export type TimeTemperatureModifier = ((time: TimeManager) => number) | IRange;
export interface ILayerTemperature {
    /**
     * When not provided, uses `0`
     */
    modifier?: number;
    /**
     * When not provided, uses `0`
     */
    timeModifier?: TimeTemperatureModifier;
}
export interface IBiomeTemperature {
    /**
     * When not provided, uses `Temperature.Neutral`
     */
    base?: number;
    /**
     * Layers not provided use `0`
     */
    layer?: Partial<Record<WorldZ, ILayerTemperature>>;
    /**
     * When not provided, uses `0`
     */
    timeModifier?: TimeTemperatureModifier;
}
export interface ITemperatureSource {
    /**
     * Gets the temperature produced by this object. Positive values are "heat", negative values are "cold".
     * Refer to the values of the `Temperature` enum to see the possible range.
     * If this method is not implemented, or it returns `undefined`, `Temperature.Neutral` is used.
     */
    getProducedTemperature?(): number | undefined;
}
export declare namespace ITemperatureSource {
    function is(value: unknown): value is ITemperatureSource;
}
export declare enum TempType {
    Cold = -1,
    Heat = 1
}
export interface IHasInsulation {
    /**
     * Gets the insulation of this object.
     *
     * Insulation is a decimal number from `0` to `1`.
     * - An insulation of `0` means that the temperature inside this object is equivalent to the temperature outside.
     * - An insulation of `1` means that *no* temperature inside this object is emitted to the outside tiles — it is a completely
     * separate temperature "biome".
     * - Values in between change how much of the temperatures are produced/used on either side.
     */
    getInsulation?(type: TempType): IInsulationResult | undefined;
    getBaseTemperature?(): number | undefined;
}
export interface IInsulationDescription {
    /**
     * A decimal number from `0` to `1`.
     * - An insulation of `0` means that the temperature inside this object is equivalent to the temperature outside.
     * - An insulation of `1` means that *no* temperature inside this object is emitted to the outside tiles — it is a completely
     * separate temperature "biome".
     * - Values in between change how much of the temperatures are produced/used on either side.
     */
    [TempType.Cold]?: number;
    /**
     * A decimal number from `0` to `1`.
     * - An insulation of `0` means that the temperature inside this object is equivalent to the temperature outside.
     * - An insulation of `1` means that *no* temperature inside this object is emitted to the outside tiles — it is a completely
     * separate temperature "biome".
     * - Values in between change how much of the temperatures are produced/used on either side.
     */
    [TempType.Heat]?: number;
}
export declare const TEMPERATURE_INSULATION_QUALITY_MULTIPLIERS: Record<QualityReal, number>;
export declare const TEMPERATURE_INSULATION_MAGIC_MULTIPLIER_RANGE: IRange<number>;
export interface IInsulationResult {
    base: number;
    qualityBonus: number;
    magicBonus: number;
    total: number;
}
export declare namespace Insulation {
    function get(entity: Entity | undefined, insulation: IInsulationDescription | undefined, type: TempType): IInsulationResult | undefined;
    function equals(a: IInsulationResult | undefined, b: IInsulationResult | undefined): boolean;
    function getTypesOrderedByRelevance(island: Island): TempType[];
}
export interface ITemperatureDescription {
    /**
     * The produced temperature of this object — objects whose temperature affects surrounding objects.
     * A number between `Temperature.Coldest` and `Temperature.Hottest`. When not provided, `Temperature.Neutral` is used.
     */
    temperature?: number;
}
