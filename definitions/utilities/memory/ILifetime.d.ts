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
export declare enum ExpectedLifetime {
    /**
     * should always exist
     */
    Always = 0,
    /**
     * should only exist while playing the game
     */
    WhilePlaying = 1,
    /**
     * The object is expected to last until the next garbage collection system
     */
    UntilNextGarbageCollection = 2
}
