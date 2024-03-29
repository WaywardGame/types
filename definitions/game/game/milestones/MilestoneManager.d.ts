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
import EventEmitter from "event/EventEmitter";
import type { CreatureType } from "game/entity/creature/ICreature";
import type { DamageType } from "game/entity/IEntity";
import type { Game } from "game/Game";
import { Milestone, MilestoneVisibility } from "game/milestones/IMilestone";
type MilestoneUpdate = [Milestone, (number | string)?];
export interface IMilestoneEvents {
    /**
     * @param milestone The milestone that is being updated
     * @param value The new value for this milestone
     * @param max The max value for this milestone
     */
    update(milestone: Milestone, value: number, max: number, newData?: string | number): void;
}
export declare class MilestoneManager extends EventEmitter.Host<IMilestoneEvents> {
    private readonly game;
    constructor(game: Game);
    readonly descriptions: Descriptions<Milestone, import("./MilestoneDefinition").default>;
    private readonly milestoneUpdates;
    /**
     * Get whether the given milestone is completed or not.
     */
    isComplete(milestone: Milestone): boolean;
    /**
     * Get the current amount for the given milestone.
     */
    getCurrentAmount(milestone: Milestone): number;
    /**
     * Get the designed amount for the given milestone
     */
    getDesiredAmount(milestone: Milestone): number;
    /**
     * Get an array of all completed milestones
     */
    getCompleted(): Milestone[];
    add(update: MilestoneUpdate): void;
    update(): void;
    areUnlockable(mode?: import("../options/IGameOptions").GameMode): boolean;
    areUnlockableInMode(mode?: import("../options/IGameOptions").GameMode): boolean;
    isUnlockableInMode(milestone: Milestone, mode?: import("../options/IGameOptions").GameMode): boolean;
    reset(): void;
    getDiscovered(milestone: Milestone): (string | number)[] | undefined;
    getDiscoveredResistsAndVulns(): Map<CreatureType, Set<DamageType>>;
    getDiscoveredResistsAndVulns(creatureType: CreatureType): Set<DamageType>;
    getVisibility(milestone: Milestone): MilestoneVisibility;
    isDiscovered(milestone: Milestone, data: number | string): boolean;
    private updateMilestone;
}
export {};
