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
import type { IRange } from "@wayward/utilities/math/Range";
import Objects from "@wayward/utilities/object/Objects";
import type { RandomInstance } from "@wayward/utilities/random/IRandom";
import type { RandomReference } from "@wayward/game/utilities/random/RandomReference";
import RandomValueGenerator from "@wayward/game/utilities/random/RandomValueGenerator";
import type { DiffFunction, IMergeable } from "@wayward/game/utilities/object/Merge";
import { SYMBOL_MERGE_DIFF } from "@wayward/game/utilities/object/Merge";
export default class RandomRange extends RandomValueGenerator<IRange> implements IMergeable<RandomRange> {
    limit?: number;
    constructor();
    constructor(random: RandomInstance | RandomReference, max: number);
    constructor(random: RandomInstance | RandomReference, min: number, max: number);
    constructor(random: RandomInstance | RandomReference, range: IRange);
    setLimit(limit?: number): this;
    int(): number;
    intInRange(): number;
    float(): number;
    [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
    [SYMBOL_MERGE_DIFF](b: RandomRange, diff: DiffFunction): unknown;
}
