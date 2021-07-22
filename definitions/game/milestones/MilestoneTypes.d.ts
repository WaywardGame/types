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
import { MilestoneVisibility, IMilestone } from "game/milestones/IMilestone";
import { GameMode } from "game/options/IGameOptions";
/**
 * This milestone will be granted after being incremented `amount` times.
 * It does not require each increment to have a different ID, like `counter` does.
 * For example, this type could be used for "number of turns played".
 * @param visibility Whether the milestone is completely visible, has its name hidden, or has its required amt hidden. Defaults to `Visible`
 * @param gameModeLock What game modes this milestone can be unlocked in. Defaults to `[Hardcore]`
 */
export declare function incrementMilestone(amount: number, visibility?: MilestoneVisibility, gameModeLock?: GameMode[]): IMilestone;
/**
 * This milestone will be granted when an `amount` of conditions happen simultaneously.
 * For example, this could be used to check for a skill level.
 * @param visibility Whether the milestone is completely visible, has its name hidden, or has its required amt hidden. Defaults to `Visible`
 * @param gameModeLock What game modes this milestone can be unlocked in. Defaults to `[Hardcore]`
 */
export declare function checkMilestone(amount: number, visibility?: MilestoneVisibility, gameModeLock?: GameMode[]): IMilestone;
/**
 * This milestone type requires a number of entries, each of which must be distinct.
 * For example, this could be used to check if the player has tamed every single creature type.
 * @param visibility Whether the milestone is completely visible, has its name hidden, or has its required amt hidden. Defaults to `Visible`
 * @param gameModeLock What game modes this milestone can be unlocked in. Defaults to `[Hardcore]`
 */
export declare function counterMilestone(amount: number, visibility?: MilestoneVisibility, gameModeLock?: GameMode[]): IMilestone;
