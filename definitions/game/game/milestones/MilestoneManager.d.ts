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
import type { Game } from "@wayward/game/game/Game";
import { Quality } from "@wayward/game/game/IObject";
import type { DamageType } from "@wayward/game/game/entity/IEntity";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import { Milestone, MilestoneVisibility } from "@wayward/game/game/milestones/IMilestone";
import type MilestoneDefinition from "@wayward/game/game/milestones/MilestoneDefinition";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
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
    private milestoneProgressHandlers?;
    constructor(game: Game);
    readonly descriptions: Descriptions<Milestone, MilestoneDefinition>;
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
    add(milestone: Milestone, data?: string | number): void;
    update(): void;
    areUnlockable(mode?: import("../options/IGameOptions").GameMode): boolean;
    areUnlockableInMode(mode?: import("../options/IGameOptions").GameMode): boolean;
    isUnlockableInMode(milestone: Milestone, mode?: import("../options/IGameOptions").GameMode): boolean;
    reset(milestone?: Milestone): void;
    getDiscovered(milestone: Milestone): Array<string | number> | undefined;
    getDiscoveredResistsAndVulns(): Map<CreatureType, Set<DamageType>>;
    getDiscoveredResistsAndVulns(creatureType: CreatureType): Set<DamageType>;
    getVisibility(milestone: Milestone): MilestoneVisibility;
    isDiscovered(milestone: Milestone, data?: number | string): boolean;
    static globalize(milestone: Milestone | MilestoneDefinition, data?: number | string): number | string | undefined;
    static unglobalize(milestone: Milestone | MilestoneDefinition, data?: number | string): number | string | undefined;
    getLastModificationTime(milestone: Milestone): number;
    getCloakingQuality(quality?: Quality): Quality;
    protected onLoadMods(): void;
    private updateMilestone;
    private getMilestoneProgressHandlers;
}
