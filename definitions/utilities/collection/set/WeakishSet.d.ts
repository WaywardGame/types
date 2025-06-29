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
export default class WeakishSet<T extends object> {
    #private;
    get size(): number;
    constructor(iterable?: Iterable<T>);
    add(...items: T[]): this;
    delete(...items: T[]): this;
    /**
     * Returns whether this set contains every given item
     */
    has(...items: T[]): boolean;
    [Symbol.iterator](): Generator<T, void>;
}
