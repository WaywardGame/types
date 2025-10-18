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
export declare enum CurseEventType {
    None = 0,
    Horde = 1,
    UnwelcomeGuest = 2,
    Shadows = 3,
    Wisp = 4,
    Swarm = 5,
    FaeVisitor = 6,
    Brownies = 7,
    Siren = 8,
    PlantDeath = 9,
    NewPlants = 10,
    CraftingInspiration = 11,
    SuffusedWithMagic = 12,
    LovedByTheWilds = 13,
    HatedByTheWilds = 14,
    RuneEffects = 15,
    Lucky = 16,
    Unlucky = 17,
    FrigidNight = 18,
    HeatWave = 19
}
export declare enum CurseGroup {
    Lucky = 0,
    Neutral = 1,
    Unlucky = 2
}
export declare enum CurseCategory {
    /**
     * Primary curses are the main ones that players should be responding to.
     */
    Primary = 0,
    /**
     * Secondary curses are ones that interact with the primary curses in interesting ways.
     *
     * Secondary curses are selected before primary curses.
     */
    Secondary = 1,
    /**
     * Dependent curses are secondary curses that can ONLY be selected if a specific primary curse is also selected.
     *
     * They're still selected before primary curses, but will be cancelled if no primary curse is selected.
     */
    Dependent = 2
}
export declare enum CursePosition {
    /** The default value for a curse event. `position` returns the island's center. */
    None = 0,
    /** The curse event spawns in a random location near the cursebearer, but not within LoS. */
    Random = 1,
    /** The curse event's position is always directly on the cursebearer. */
    Follow = 2
}
export declare enum CurseComponent {
    Skill = 0,
    AttackDefense = 1,
    CumulativeEvilCrafting = 2,
    Modifier = 3,
    CumulativeKilling = 4,
    Sleeplessness = 5
}
export declare enum CurseSystemDiscovery {
    CurseFactors = 0,
    CurseFactorsExact = 1
}
export declare enum CurseEventDisplayMode {
    Hidden = 0,
    Mystery = 1,
    Revealed = 2
}
export declare enum CurseEventRevealCondition {
    None = 0,
    /** Does nothing except indicate to *yourself* that this curse event will reveal via scripts */
    Scripts = 1,
    Start = 2,
    End = 3,
    Revealed = 4,
    CreatureWitnessed = 5,
    CreatureKilled = 6
}
