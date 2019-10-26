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
declare module Descriptions {
    /**
     * Returns a Stream that iterates over the entries of a Descriptions object, in key-value tuples.
     */
    function stream<E extends number, T>(obj?: Descriptions<E, T>): Stream<[E, T]>;
}
export default Descriptions;
