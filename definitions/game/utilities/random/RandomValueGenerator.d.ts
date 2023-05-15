/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Objects from "utilities/object/Objects";
import type { RandomInstance } from "utilities/random/IRandom";
import { RandomReference } from "utilities/random/RandomReference";
export default abstract class RandomValueGenerator<T> implements Objects.ICloneable {
    random?: RandomInstance | RandomReference;
    value?: T;
    constructor(random?: RandomInstance | RandomReference, value?: T);
    getRandomInstance(): RandomInstance | undefined;
    getRandom(): import("./Random").Random<import("./generators/LegacySeededGenerator").LegacySeededGenerator | import("./generators/PCGSeededGenerator").PCGSeededGenerator>;
    abstract [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
    protected clone(clone: typeof Objects.deepClone): readonly [RandomInstance | RandomReference | undefined, T | undefined];
}
