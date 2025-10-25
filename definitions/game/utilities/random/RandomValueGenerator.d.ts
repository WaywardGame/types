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
import type { DiffFunction, IMergeable } from "@wayward/game/utilities/object/Merge";
import { SYMBOL_MERGE_DIFF } from "@wayward/game/utilities/object/Merge";
import { RandomReference } from "@wayward/game/utilities/random/RandomReference";
import Objects from "@wayward/utilities/object/Objects";
import type { RandomInstance } from "@wayward/utilities/random/IRandom";
import type { Random } from "@wayward/utilities/random/Random";
import type { LegacySeededGenerator } from "@wayward/utilities/random/generators/LegacySeededGenerator";
import type { PCGSeededGenerator } from "@wayward/utilities/random/generators/PCGSeededGenerator";
export default abstract class RandomValueGenerator<T> implements Objects.ICloneable, IMergeable<RandomValueGenerator<T>> {
    random?: RandomInstance | RandomReference;
    value?: T;
    constructor(random?: RandomInstance | RandomReference, value?: T);
    getRandomInstance(): RandomInstance | undefined;
    getRandom(): Random<LegacySeededGenerator | PCGSeededGenerator>;
    abstract [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
    protected clone(clone: typeof Objects.deepClone): readonly [RandomInstance | RandomReference | undefined, T | undefined];
    [SYMBOL_MERGE_DIFF](b: RandomValueGenerator<T>, diff: DiffFunction): unknown;
}
