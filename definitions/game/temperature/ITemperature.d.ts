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
import TimeManager from "game/TimeManager";
import { WorldZ } from "game/WorldZ";
export declare enum Temperature {
    Coldest = -100,
    Cold = -50,
    Cool = -25,
    Chilled = -12.5,
    Neutral = 0,
    LukeWarm = 12.5,
    Warm = 25,
    Hot = 50,
    Hottest = 100
}
export interface ILayerTemperature {
    /**
     * When not provided, uses `0`
     */
    modifier?: number;
    /**
     * When not provided, uses `0`
     */
    timeModifier?(time: TimeManager): number;
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
    timeModifier?(time: TimeManager): number;
}
export interface ITemperatureSource {
    /**
     * Gets the temperature produced by this object. Positive values are "heat", negative values are "cold".
     * Refer to the values of the `Temperature` enum to see the possible range.
     * If this method is not implemented, or it returns `undefined`, `Temperature.Neutral` is used.
     */
    getProducedTemperature?(): number | undefined;
}
export declare module ITemperatureSource {
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
    getInsulation?(type: TempType): number | undefined;
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
export declare function getInsulationTypesOrderedByRelevance(): TempType[];
export interface ITemperatureDescription {
    /**
     * The produced temperature of this object — objects whose temperature affects surrounding objects.
     * A number between `Temperature.Coldest` and `Temperature.Hottest`. When not provided, `Temperature.Neutral` is used.
     */
    temperature?: number;
}
