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
import Stream from "@wayward/goodstream/Stream";
declare module Descriptions {
    /**
     * Returns a Stream that iterates over the entries of a Descriptions object, in key-value tuples.
     */
    function stream<E extends number, T>(obj?: Descriptions<E, T>): Stream<[E, T]>;
}
export default Descriptions;
