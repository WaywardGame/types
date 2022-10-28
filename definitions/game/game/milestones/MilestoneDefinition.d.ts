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
import { MilestoneDataType, MilestoneVisibility } from "game/milestones/IMilestone";
import { GameMode } from "game/options/IGameOptions";
export default class MilestoneDefinition {
    dataType: MilestoneDataType;
    amount: number;
    /**
     * This milestone is a milestone that will be granted the first time it's updated.
     * Can be used for keeping track of metagame progress.
     */
    static event(): MilestoneDefinition;
    /**
     * This milestone will be granted when an `amount` of conditions happen simultaneously.
     * For example, this could be used to check for a skill level.
     */
    static check(amount: number): MilestoneDefinition;
    /**
     * This milestone will be granted after being incremented `amount` times.
     * It does not require each increment to have a different ID, like `counter` does.
     * For example, this type could be used for "number of turns played".
     */
    static increment(amount: number): MilestoneDefinition;
    /**
     * This milestone type requires a number of entries, each of which must be distinct.
     * For example, this could be used to check if the player has tamed every single creature type.
     */
    static counter(amount: number): MilestoneDefinition;
    private constructor();
    /**
     * Replaces the type and desired amount of this MilestoneDefinition with the type and desired amount of another's.
     */
    set(def: MilestoneDefinition): this;
    /**
     * Inherits the metadata (visibility, applicable game modes, whether it's disabled by mods, any unlock handler)
     * of another MilestoneDefinition.
     */
    inherit(def: MilestoneDefinition): this;
    visibility: MilestoneVisibility;
    /**
     * @param visibility Whether the milestone is completely visible, has its name hidden, or has its required amt hidden. Defaults to `Visible`
     */
    setVisibility(visibility: MilestoneVisibility): this;
    /**
     * Sets this milestone to be unlockable in all game modes, and not disabled by mods.
     */
    setAlwaysUnlockable(): this;
    gameModeLock?: GameMode[];
    /**
     * @param gameModes What game modes this milestone can be unlocked in. Defaults to `[Hardcore]`
     */
    setGameModes(...gameModes: GameMode[]): this;
    /**
     * Sets this milestone to be unlockable in all game modes.
     */
    setGameModes(all: "all"): this;
    disabledByMods: boolean;
    setNotDisabledByMods(): this;
    unlockedHandler?: (tellPlayer: () => void) => any;
    onUnlocked(handler: (tellPlayer: () => void) => any): this;
}
