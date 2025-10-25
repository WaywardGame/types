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
export declare enum Milestone {
    Abnormalizer = 0,
    Chef = 1,
    Exterminator = 2,
    Crafter = 3,
    Gardener = 4,
    Gatherer = 5,
    Hunter = 6,
    Locksmith = 7,
    ReaperOfSouls = 8,
    Survivor = 9,
    Pitcher = 10,
    Trapsetter = 11,
    TreasureHunter = 12,
    Collector = 13,
    Explorer = 14,
    Grandmaster = 15,
    Prepared = 16,
    Doctor = 17,
    Artificer = 18,
    Returned = 19,
    Navigator = 20,
    DragonSlayer = 21,
    Treasurer = 22,
    Pulchritudinous = 23,
    Friendly = 24,
    Malevolent = 25,
    Benevolent = 26,
    Boundless = 27,
    Talented = 28,
    Weathered = 29,
    Seasoned = 30,
    Pacifier = 31,
    Merchant = 32,
    Notekeeper = 33,
    Operator = 34,
    Huntsman = 35,
    Contender = 36,
    Challenger = 37,
    DestroyerOfMagi = 38,
    Helmsman = 39,
    Multitasker = 40,
    Apocryphal = 41,
    Diverse = 42,
    InternalDiscoveredBoats = 43,
    Traitor = 44,
    MasterOfAll = 45,
    Rouseabout = 46,
    Murderer = 47,
    Retailer = 48,
    Masochist = 49,
    Versatile = 50,
    InternalStatDiscovery = 51,
    Dedicated = 52,
    Hounded = 53,
    Serene = 54,
    InternalRuneOrAltarDiscovery = 55,
    Curator = 56,
    Thaumaturgic = 57,
    Runekeeper = 58,
    InternalDeityDiscovery = 59,
    InternalMerchantsDiscovery = 60,
    InternalCurseSystemDiscovery = 61,
    Invoker = 62,
    InternalDeityInvoked = 63,
    InternalInsulationDiscovery = 64,
    Turbulent = 65,
    Statistician = 66,
    Afflicted = 67,
    Exsanguinated = 68,
    InternalItemDiscovered = 69,
    Cursed = 70,
    Cursebreaker = 71,
    Oblivious = 72
}
export type ExcludeInternalMilestones<MILESTONE extends Milestone> = PickValueKeys<typeof Milestone, MILESTONE> extends `Internal${string}` ? never : MILESTONE;
export declare enum MilestoneVisibility {
    /**
     * Everything about the milestone — the name, the description, the progress — is displayed to the player.
     */
    Visible = 0,
    /**
     * Only display the progress.
     */
    Invisible = 1,
    /**
     * Only display the name.
     */
    Mystery = 2,
    /**
     * Hide the milestone altogether. Useful for hiding until a threshold is reached or another milestone is unlocked.
     */
    Hidden = 3,
    /**
     * This milestone's existence is not revealed to the player, as it is only used internally.
     */
    Internal = 4
}
export declare enum MilestoneDataType {
    /**
     * This milestone will be granted after being incremented `amount` times.
     * It does not require each increment to have a different ID, like `counter` does.
     *
     * For example, this type could be used for "number of turns played".
     */
    Increment = 0,
    /**
     * This milestone type requires a number of entries, each of which must be distinct.
     *
     * For example, this could be used to check if the player has tamed every single creature type.
     */
    Counter = 1,
    /**
     * This milestone will be granted when an `amount` of conditions happen simultaneously.
     *
     * For example, this could be used to check for a skill level.
     */
    Check = 2,
    /**
     * The same as the `Check` type, but upon the milestone being set to a value lower than the previous check, the displayed "progress" will match, rather than it staying at your previous highest.
     */
    LiveCheck = 3,
    /**
     * This milestone will be granted the first time it's updated.
     *
     * For example, this type could be used for determining whether the player has done something specific.
     */
    Event = 4,
    /**
     * This milestone type requires a number of entries, each of which must be distinct, and discovered in order.
     *
     * For example, this type could be used to handle staged discovery.
     */
    Ordered = 5
}
export interface IMilestoneData {
    amount: number;
    data?: Array<number | string>;
    lastModified?: number;
}
