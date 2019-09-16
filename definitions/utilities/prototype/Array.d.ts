/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
declare global {
    interface Array<T> {
        flat<U>(this: U[][]): U[];
        /**
         * Remove `undefined` values from an array
         */
        filterNullish(): Array<Exclude<T, undefined>>;
        /**
         * Remove all falsey values from an array (does not filter out `0` and `""`)
         */
        filterFalsey(): Array<Exclude<T, undefined | null | false>>;
        /**
         * Remove all falsey values from an array, including `0` and `""`
         */
        filterFalsey(includeZeroAndEmptyString: true): Array<Exclude<T, undefined | null | false | 0 | "">>;
    }
    interface ReadonlyArray<T> {
        flat<U>(this: U[][]): U[];
        /**
         * Remove `undefined` values from an array
         */
        filterNullish(): Array<Exclude<T, undefined>>;
        /**
         * Remove all falsey values from an array (does not filter out `0` and `""`)
         */
        filterFalsey(): Array<Exclude<T, undefined | null | false>>;
        /**
         * Remove all falsey values from an array, including `0` and `""`
         */
        filterFalsey(removeZeroAndEmptyString: true): Array<Exclude<T, undefined | null | false | 0 | "">>;
    }
}
export default function (): void;
