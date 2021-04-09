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
import { IRange } from "utilities/math/Range";
import Objects from "utilities/object/Objects";
import { RandomInstance } from "utilities/random/Random";
import RandomValueGenerator from "utilities/random/RandomValueGenerator";
export default class RandomRange extends RandomValueGenerator<IRange> {
    limit?: number;
    constructor();
    constructor(random: RandomInstance, max: number);
    constructor(random: RandomInstance, min: number, max: number);
    constructor(random: RandomInstance, range: IRange);
    setLimit(limit?: number): this;
    int(): number;
    intInRange(): number;
    float(): number;
    [Objects.SYMBOL_CLONE](clone: typeof Objects.deepClone): this;
}
