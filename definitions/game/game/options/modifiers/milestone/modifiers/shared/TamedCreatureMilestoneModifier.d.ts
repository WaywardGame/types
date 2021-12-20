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
import type Player from "game/entity/player/Player";
import type { Milestone } from "game/milestones/IMilestone";
import MilestoneModifier, { MilestoneModifierGroup, MilestoneModifierInstance } from "game/options/modifiers/milestone/MilestoneModifier";
import type { Random, SeededGenerator } from "utilities/random/Random";
declare class TamedCreatureMilestoneModifierInstance extends MilestoneModifierInstance {
    private readonly modifier;
    constructor(modifier: TamedCreatureMilestoneModifier, id: Milestone, random: Random<SeededGenerator>);
    onSpawnPlayer(player: Player): void;
}
export default abstract class TamedCreatureMilestoneModifier extends MilestoneModifier {
    getGroup(): MilestoneModifierGroup;
    instantiate(id: Milestone): TamedCreatureMilestoneModifierInstance;
    abstract isAberrant(): boolean;
}
export {};
