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
export default class StackMap<K, V> extends Map<K, V> {
    private readonly maxSize;
    constructor(entries?: ReadonlyArray<readonly [K, V]> | null, maxSize?: number);
    set(key: K, value: V): this;
}
