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
import Objects from "utilities/object/Objects";
import type { RandomInstance } from "utilities/random/Random";
import { RandomReference } from "utilities/random/Random";
export default abstract class RandomValueGenerator<T> implements Objects.ICloneable {
    random?: RandomInstance | RandomReference;
    value?: T;
    constructor(random?: RandomInstance | RandomReference, value?: T);
    getRandomInstance(): RandomInstance | undefined;
    getRandom(): import("utilities/random/Random").Random<import("utilities/random/Random").SeededGenerator>;
    abstract [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
    protected clone(clone: typeof Objects.deepClone): readonly [RandomInstance | RandomReference | undefined, T | undefined];
}
