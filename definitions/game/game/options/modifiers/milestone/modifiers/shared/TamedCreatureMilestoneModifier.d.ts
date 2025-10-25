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
import type Player from "@wayward/game/game/entity/player/Player";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import MilestoneModifier, { MilestoneModifierInstance } from "@wayward/game/game/options/modifiers/milestone/MilestoneModifier";
import { MilestoneModifierGroup } from "@wayward/game/game/options/modifiers/milestone/IMilestoneModifier";
import type { Random } from "@wayward/utilities/random/Random";
declare class TamedCreatureMilestoneModifierInstance extends MilestoneModifierInstance {
    private readonly modifier;
    constructor(modifier: TamedCreatureMilestoneModifier, id: Milestone, random: Random, player?: Player);
    onSpawnPlayer(player: Player): void;
}
export default abstract class TamedCreatureMilestoneModifier extends MilestoneModifier {
    getGroup(): MilestoneModifierGroup;
    instantiate(id: Milestone, player?: Player): TamedCreatureMilestoneModifierInstance | undefined;
    abstract isAberrant(): boolean;
}
export {};
