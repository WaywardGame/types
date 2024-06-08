/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export declare enum Deity {
    Evil = 1,
    Neutral = 2,
    Good = 4,
    All = 8,
    Single = 16
}
export type DeityReal = Exclude<Deity, Deity.All | Deity.Single>;
export declare enum DeityDiscovery {
    AlignmentGraph = 0,// sacrifice/invoke to any deity at an altar
    AlignmentGraphExactNumbers = 1,// uses Invoker (16,000)
    AlignmentUpdateExactNumbers = 2,// uses Invoker (16,000)
    CurseExactNumbers = 3,// uses Invoker (16,000)
    CurseFactors = 4,// uses current alignment (-8,000)
    CurseFactorsExact = 5,// uses current alignment (-16,000)
    DeitiesUnderstood = 6
}
