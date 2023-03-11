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
import type { IModInfo } from "mod/IModInfo";
import type { Random } from "utilities/random/Random";
declare module Enums {
    function isModdable(enumObject: any): boolean;
    function getModStart(enumObject: any): number;
    /**
     * Returns whether this enum entry is modded.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param entry The entry in the enum. Usually its index.
     */
    function isModded<E, K extends string>(enumObject: {
        [key in K]: E;
    }, entry: E): boolean;
    function getMod<O>(enumObject: O, entry: O[keyof O], isGlobalEnum?: boolean): IModInfo | undefined;
    /**
     * Returns an enum entry by its name, case-insensitive.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param name The name of the enum entry. Case-insensitive.
     * @returns The enum entry, if found; otherwise `undefined`.
     */
    function findByName<E, K extends string>(enumObject: {
        [key in K]: E;
    }, name: K): E;
    /**
     * Returns an enum entry by its index. The order is not guaranteed.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param n The index of the enum entry.
     * @returns The enum entry, or if out of bounds, `undefined`.
     */
    function getNth<E, K extends string>(enumObject: {
        [key in K]: E;
    }, n: number): Exclude<E, AnyFunction> | undefined;
    /**
     * Returns the number of entries in this enum.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     */
    function getLength(enumObject: any): number;
    /**
     * Returns a random enum entry.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param random The random instance to use. **Defaults to seeded random.** Note that using this method in non-game locations may
     * cause seed desyncs!
     * @param filter Repeats the choice until the random value matches the filter
     */
    function getRandom<T>(enumObject: T, random: Random, filter?: (value: T[keyof T], index: number) => boolean): Exclude<T[keyof T], AnyFunction<any>>;
    /**
     * Get the names of the entries in an enum.
     */
    function keys<T>(enumObject: T): readonly (keyof T)[];
    /**
     * Iterate over the names of the entries in an enum.
     */
    function keyStream<T>(enumObject: T): import("@wayward/goodstream").default<keyof T>;
    /**
     * Iterate over the values in an enum.
     */
    function values<T>(enumObject: T): readonly Exclude<T[keyof T], AnyFunction<any>>[];
    function valueStream<T>(enumObject: T): import("@wayward/goodstream").default<Exclude<T[keyof T], AnyFunction<any>>>;
    /**
     * Iterate over the entries in an enum. Yields a tuple containing the name and value of each entry.
     */
    function entries<T>(enumObject: T): readonly [keyof T, Exclude<T[keyof T], AnyFunction<any>>][];
    function entryStream<T>(enumObject: T): import("@wayward/goodstream").default<[keyof T, Exclude<T[keyof T], AnyFunction<any>>]>;
    function lerp<T>(enumObject: T, t: number): Exclude<T[keyof T], AnyFunction<any>>;
    /**
     * Returns whether the given number is a valid entry in an enum.
     * @param enumObject The enum object to check for the entry.
     * @param entry The value to check.
     * @param isBasicEnum Whether the enum is a "basic" enum; IE, every entry is a number between `0` and `Infinity`. (Default: `true`)
     */
    function isValid<E, K extends string>(enumObject: {
        [key in K]: E;
    }, entry: unknown, isBasicEnum?: boolean): entry is E;
    function toString(enumObject: any, n: number, exlude?: number): string;
    function sortKeysByOrdinal<E extends number, K extends string>(enumObject: {
        [key in K]: E;
    }): (keyA: K, keyB: K) => number;
    /**
     * Creates a "merged" enum which can be used in `Enums.keys`, `values`, `entries`, etc with the same performance.
     *
     * **Note that basic lookup will not be aware of new/deleted values until an `Enums` operation is called.**
     */
    function merge<ENUM_OBJECTS extends any[]>(...enumObjects: ENUM_OBJECTS): (ENUM_OBJECTS["length"] extends 0 ? {} : ENUM_OBJECTS["length"] extends 1 ? ENUM_OBJECTS[0] : ENUM_OBJECTS["length"] extends 2 ? {
        [KEY in keyof (ENUM_OBJECTS[0] & ENUM_OBJECTS[1])]: (ENUM_OBJECTS[0] & ENUM_OBJECTS[1])[KEY];
    } : ENUM_OBJECTS["length"] extends 3 ? {
        [KEY in keyof (ENUM_OBJECTS[0] & ENUM_OBJECTS[1] & ENUM_OBJECTS[2])]: (ENUM_OBJECTS[0] & ENUM_OBJECTS[1] & ENUM_OBJECTS[2])[KEY];
    } : ENUM_OBJECTS["length"] extends 4 ? {
        [KEY in keyof (ENUM_OBJECTS[0] & ENUM_OBJECTS[1] & ENUM_OBJECTS[2] & ENUM_OBJECTS[3])]: (ENUM_OBJECTS[0] & ENUM_OBJECTS[1] & ENUM_OBJECTS[2] & ENUM_OBJECTS[3])[KEY];
    } : ENUM_OBJECTS["length"] extends 5 ? {
        [KEY in keyof (ENUM_OBJECTS[0] & ENUM_OBJECTS[1] & ENUM_OBJECTS[2] & ENUM_OBJECTS[3] & ENUM_OBJECTS[4])]: (ENUM_OBJECTS[0] & ENUM_OBJECTS[1] & ENUM_OBJECTS[2] & ENUM_OBJECTS[3] & ENUM_OBJECTS[4])[KEY];
    } : "too many enum objects, expand type");
}
export default Enums;
