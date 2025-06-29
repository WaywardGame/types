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
type MapIt<K, V> = Iterable<readonly [K, V]>;
type MapArr<K, V> = ReadonlyArray<readonly [K, V]>;
export default class LimitedMap<K, V> extends Map<K, V> {
    readonly maxSize: number;
    constructor(maxSize: number);
    constructor(iterable: MapIt<K, V> | null, maxSize: number);
    constructor(entries: MapArr<K, V> | null, maxSize: number);
    private disposeHandler?;
    /**
     * Set a handler that handles when the map exceeds its limit, deleting the oldest item.
     *
     * Return `false` from the handler to instead "bump" the first item to the end, and then try to delete the oldest item again.
     *
     * Returning `false` for every item will forcibly delete the oldest item.
     */
    setDisposeHandler(handler: (key: K, value: V, canCancel: boolean) => boolean | void): this;
    /**
     * 1. Sets the given key and value in the map.
     * 2. If/while the map size exceeds the limit, the dispose handler is called for the oldest item.
     * 3. If the handler returns `false`, the item is instead "bumped" to the end of the map.
     * 4. If the handler returns `false` for every item, oldest items are forcibly deleted until the map no longer exceeds the limit.
     */
    set(key: K, value: V): this;
    private bumping;
    bump(key: K): boolean;
    /**
     * Deletes the item with the given key, and calls the dispose handler if it's been set.
     */
    delete(key: K): boolean;
    /**
     * Clears the map, calling the dispose handler for each item if it's been set.
     */
    clear(): void;
}
export {};
