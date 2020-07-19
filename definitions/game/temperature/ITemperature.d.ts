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
    Neutral = 0,
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
