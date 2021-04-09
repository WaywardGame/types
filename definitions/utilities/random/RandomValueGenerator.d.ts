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
import Objects from "utilities/object/Objects";
import { RandomInstance } from "utilities/random/Random";
export default abstract class RandomValueGenerator<T> implements Objects.ICloneable {
    random?: RandomInstance;
    value?: T;
    constructor(random?: RandomInstance, value?: T);
    getRandom(): import("utilities/random/Random").Random<import("utilities/random/Random").SeededGenerator>;
    abstract [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
    protected clone(clone: typeof Objects.deepClone): readonly [RandomInstance | undefined, T | undefined];
}
