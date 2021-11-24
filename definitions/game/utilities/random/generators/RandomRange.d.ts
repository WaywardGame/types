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
import type { IRange } from "utilities/math/Range";
import Objects from "utilities/object/Objects";
import type { RandomInstance, RandomReference } from "utilities/random/Random";
import RandomValueGenerator from "utilities/random/RandomValueGenerator";
export default class RandomRange extends RandomValueGenerator<IRange> {
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
}
