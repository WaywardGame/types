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
export declare enum IslandName {
    AdjectiveIsland = 0,
    IslandOfNoun = 1,
    GenericDescriptor = 2,
    GenericNoun = 3
}
declare const islandNames: Descriptions<IslandName, string | string[]>;
export default islandNames;
