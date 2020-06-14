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
import EventEmitter from "event/EventEmitter";
import { IMilestone, Milestone } from "game/milestones/IMilestone";
import { GameMode } from "game/options/IGameOptions";
declare type IMilestoneUpdate = [Milestone, number?];
export interface IMilestoneEvents {
    /**
     * @param milestone The milestone that is being updated
     * @param value The new value for this milestone
     * @param max The max value for this milestone
     */
    update(milestone: Milestone, value: number, max: number): void;
}
declare class MilestonesManager extends EventEmitter.Host<IMilestoneEvents> {
    readonly descriptions: Descriptions<Milestone, IMilestone>;
    private readonly milestoneUpdates;
    /**
     * Get whether the given milestone is completed or not.
     */
    isComplete(milestone: Milestone): boolean;
    /**
     * Get the current amount for the given milestone.
     */
    getAmount(milestone: Milestone): number;
    /**
     * Get a `Stream` of all completed milestones
     */
    getCompleted(): import("@wayward/goodstream/Stream").default<Milestone>;
    add(...updates: IMilestoneUpdate[]): void;
    update(): void;
    areUnlockable(mode?: GameMode): boolean;
    areUnlockableInMode(mode?: GameMode): boolean;
    reset(): void;
    private updateMilestone;
}
declare const _default: MilestonesManager;
export default _default;
